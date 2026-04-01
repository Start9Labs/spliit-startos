<p align="center">
  <img src="icon.svg" alt="Spliit Logo" width="21%">
</p>

# Spliit on StartOS

> **Upstream docs:** <https://github.com/spliit-app/spliit/blob/main/README.md>
>
> Everything not listed in this document should behave the same as upstream
> Spliit. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable.

Spliit is a free and open source alternative to Splitwise for sharing expenses with friends and family. This repository packages it for [StartOS](https://github.com/Start9Labs/start-os).

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

This package runs **2 containers**:

| Container | Image | Purpose |
|-----------|-------|---------|
| main | Built from upstream Dockerfile | Spliit Next.js web application |
| postgres | `postgres` (Alpine) | PostgreSQL database |

- **Architectures:** x86_64, aarch64
- **Entrypoint:** Default upstream entrypoints for both containers

## Volume and Data Layout

| Volume | Mount Point | Contents |
|--------|-------------|---------|
| `startos` | — | StartOS-specific files (`store.json` with PostgreSQL password) |
| `db` | `/var/lib/postgresql` | PostgreSQL data directory |

## Installation and First-Run Flow

On install, StartOS:

1. Auto-generates a 22-character PostgreSQL password
2. Stores it in `store.json`

The app is ready to use immediately — no setup wizard or initial configuration needed. Just open the web UI and create your first group.

## Configuration Management

| StartOS-Managed | Upstream-Managed |
|-----------------|------------------|
| PostgreSQL credentials (auto-generated) | All expense groups, members, and settings (via web UI) |
| Database connection strings | |
| Telemetry disabled (`NEXT_TELEMETRY_DISABLED=1`) | |
| PostgreSQL listens on localhost only | |

## Network Access and Interfaces

| Interface | ID | Type | Port | Protocol | Purpose |
|-----------|----|------|------|----------|---------|
| Web UI | `ui` | ui | 3000 | HTTP | Spliit web application |

## Actions (StartOS UI)

None.

## Backups and Restore

- **Database:** Backed up via `pg_dump` / restored via `pg_restore` (not raw volume copy)
- **`startos` volume:** Backed up via rsync (contains `store.json`)
- **Restore behavior:** Database is restored from dump; `store.json` is restored in place

## Health Checks

| Check | Daemon | Method | Grace Period | Messages |
|-------|--------|--------|--------------|----------|
| Database | postgres | `pg_isready` command | — | Ready: "PostgreSQL is ready" |
| Web Interface | spliit | Port listening (3000) | 60 seconds | Ready: "Spliit is ready" |

Daemons start in order: PostgreSQL → Spliit

## Dependencies

None.

## Limitations and Differences

1. **No riscv64 support** — only x86_64 and aarch64 architectures are supported
2. **Embedded PostgreSQL** — uses a bundled PostgreSQL instance rather than an external database

## What Is Unchanged from Upstream

- All expense tracking features (groups, members, expenses, reimbursements)
- Currency support and formatting
- Group sharing and collaboration
- Expense categories and splitting methods
- Settlement calculations

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: spliit
image: built from upstream Dockerfile, postgres (Alpine)
architectures: [x86_64, aarch64]
volumes:
  startos: store.json
  db: /var/lib/postgresql
ports:
  ui: 3000
dependencies: none
startos_managed_env_vars:
  - POSTGRES_USER
  - POSTGRES_PASSWORD
  - POSTGRES_DB
  - POSTGRES_PRISMA_URL
  - POSTGRES_URL_NON_POOLING
  - NEXT_TELEMETRY_DISABLED
actions: []
```
