<p align="center">
  <img src="icon.svg" alt="Spliit Logo" width="21%">
</p>

# Spliit on StartOS

> Everything not listed in this document should behave the same as upstream
> Spliit. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Spliit](https://github.com/spliit-app/spliit) is a shared-expense tracker: create a group, add what people paid for, and it works out who owes whom. This package bundles the PostgreSQL it needs and turns off the telemetry the upstream build ships with.

- **Upstream repo:** <https://github.com/spliit-app/spliit>
- **Wrapper repo:** <https://github.com/Start9Labs/spliit-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

Two upstream images, unmodified.

| Property      | Value                                   |
| ------------- | --------------------------------------- |
| Images        | `ghcr.io/spliit-app/spliit`, `postgres` |
| Architectures | x86_64, aarch64                         |
| Entrypoint    | Each image's own                        |

| Subcontainer   | Daemon     | Starts after | Purpose                                  |
| -------------- | ---------- | ------------ | ---------------------------------------- |
| `postgres-sub` | `postgres` | —            | The bundled database, bound to loopback  |
| `spliit-sub`   | `spliit`   | `postgres`   | The application — the one to `attach` to |

Postgres is started with an explicit loopback listen address, so it is reachable only from inside the service's own network namespace.

## Volume and Data Layout

Two volumes, and one of them never enters a container.

| Volume    | Mount Point           | Purpose                                      |
| --------- | --------------------- | -------------------------------------------- |
| `db`      | `/var/lib/postgresql` | The PostgreSQL data directory                |
| `startos` | — (host side)         | `store.json`; never mounted into a container |

The application container mounts nothing at all: every group, expense, and balance lives in the database.

## File Models

One model, holding one value.

| File         | Volume    | Format | Modelled                | Written by |
| ------------ | --------- | ------ | ----------------------- | ---------- |
| `store.json` | `startos` | JSON   | Yes — `FileHelper.json` | Install    |

It holds `postgresPassword`, generated at install. That value is both what the application authenticates to the database with and what the backup's dump uses, so the two are never out of step.

**Spliit itself takes no configuration file.** Everything it needs arrives as environment built at daemon start — the two database URLs it expects, and one override:

| Variable                  | Value | Why it differs from leaving Spliit alone           |
| ------------------------- | ----- | -------------------------------------------------- |
| `NEXT_TELEMETRY_DISABLED` | `1`   | The Next.js build otherwise reports usage upstream |

## Dependencies

None. PostgreSQL is bundled as a private sidecar rather than declared as a dependency, so it is not shared with any other service.

## Network Access and Interfaces

One interface, serving the whole application.

| Interface | Id   | Type | Port | Description                                           |
| --------- | ---- | ---- | ---- | ----------------------------------------------------- |
| Web UI    | `ui` | ui   | 3000 | The Spliit web interface for managing shared expenses |

The port is bound on the `ui-multi` MultiHost and is not masked.

**Spliit has no accounts and no login.** A group is reachable by anyone holding its URL, which is how the upstream app is designed to work — sharing a group means sharing a link. Anyone who can reach a published address can also create groups and list nothing they were not given the URL for. Treat the addresses you publish accordingly.

## Installation and First-Run Flow

Install generates the database password and starts the service. There is no task, no account, and no credential to record.

The first thing to do is create a group in the web UI and share its URL with the people in it. Nothing else is required.

## Actions

None. Spliit is managed entirely through its web interface, so the package adds no action.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

Two checks, one per daemon.

| Check      | Displayed       | Method                 | Grace |
| ---------- | --------------- | ---------------------- | ----- |
| `postgres` | "Database"      | `pg_isready`           | —     |
| `spliit`   | "Web Interface" | Port 3000 is listening | 1 min |

The database check reports `loading` rather than failing while it initialises, so a slow first start reads as progress. The application waits on it, so a service stuck starting is usually waiting on the database rather than on Spliit.

The minute of grace covers a first start, where Spliit runs its schema migrations before binding. A failure after that is the application, and the service logs name it — most often the database refusing the connection.

## Backups and Restore

Mixed, and the distinction decides what a restore gives you.

- **`db` is dumped, not copied.** `Backups.withPgDump` takes a logical dump of the Spliit database, authenticating with the password from `store.json`. The volume's files are never captured; a restore replays the dump into a fresh database.
- **`startos` is copied wholesale** — `store.json` with that password.

The two halves are not independent: the dump is taken with a credential that lives in `store.json`, so a backup missing that file could not be restored.

**Restore is complete** — every group, expense, and balance returns, and the URLs people already have keep working.

## Limitations and Differences

1. **There are no accounts and no login.** A group's URL is its access control, which is upstream's design.
2. **PostgreSQL is a private sidecar.** It cannot be shared with another service or replaced with an external database.
3. **Next.js telemetry is disabled.**
4. **Nothing is configurable.** There is no action, no form, and no setting the package exposes.
5. **No riscv64 build.** x86_64 and aarch64 only.

---

## Quick Reference for AI Consumers

```yaml
package_id: spliit
image: ghcr.io/spliit-app/spliit # plus postgres
architectures:
  - x86_64
  - aarch64
subcontainers:
  - postgres-sub # private database, loopback only
  - spliit-sub # the application; the one to attach to
volumes:
  db: /var/lib/postgresql (in postgres-sub)
  startos: host side (store.json)
file_models:
  - store.json
startos_managed_env_vars:
  - POSTGRES_PRISMA_URL
  - POSTGRES_URL_NON_POOLING
  - NEXT_TELEMETRY_DISABLED
  - POSTGRES_USER # postgres-sub
  - POSTGRES_PASSWORD # postgres-sub
  - POSTGRES_DB # postgres-sub
dependencies: []
interfaces:
  ui: { type: ui, port: 3000 }
actions: []
tasks: []
health_checks:
  - postgres # displayed "Database"
  - spliit # displayed "Web Interface"
```
