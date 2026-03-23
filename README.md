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

- **Upstream repo:** <https://github.com/spliit-app/spliit>
- **Wrapper repo:** <https://github.com/Start9Labs/spliit-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)

---

## Image and Container Runtime

| Property | Value |
|----------|-------|
| App image | Built from upstream Dockerfile |
| Database image | `postgres:16-alpine` |
| Architectures | x86_64, aarch64 |
| Entrypoint | Upstream default (both images) |

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `startos` | — | StartOS-specific files (`store.json`) |
| `db` | `/var/lib/postgresql` | PostgreSQL data directory |

## Installation and First-Run Flow

On install, StartOS:

1. Auto-generates a 22-character PostgreSQL password
2. Stores it in `store.json`

The app is ready to use immediately — no setup wizard or initial configuration needed. Just open the web UI and create your first group.

## Configuration Management

| StartOS-Managed | Upstream-Managed |
|-----------------|------------------|
| PostgreSQL credentials (auto-generated) | All expense groups, members, and settings |
| Database connection strings | — |
| Telemetry disabled (`NEXT_TELEMETRY_DISABLED=1`) | — |

All application settings are managed through the Spliit web UI, just like upstream.

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose |
|-----------|------|----------|---------|
| Web UI | 3000 | HTTP | Spliit web application |

## Actions (StartOS UI)

None.

## Backups and Restore

Uses `pg_dump`/`pg_restore` for the database instead of raw volume rsync. The `startos` volume (containing `store.json`) is backed up via rsync. The database dump is written directly to the backup target.

## Health Checks

| Check | Method | Messages |
|-------|--------|----------|
| Database | `pg_isready` command | Ready: "PostgreSQL is ready" |
| Web Interface | Port listening (3000) | Ready: "Spliit is ready" |

## Limitations and Differences

1. **No riscv64 support** — only x86_64 and aarch64 architectures are supported
2. **Embedded PostgreSQL** — uses a bundled PostgreSQL 16 instance rather than an external database

## What Is Unchanged from Upstream

- All expense tracking features (groups, members, expenses, reimbursements)
- Currency support and formatting
- Group sharing and collaboration
- Expense categories and splitting methods
- Settlement calculations

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: spliit
image: built from upstream Dockerfile
database_image: postgres:16-alpine
architectures: [x86_64, aarch64]
volumes:
  startos: store.json
  db: /var/lib/postgresql
ports:
  ui: 3000
  postgres: 5432 (internal only)
dependencies: none
startos_managed_env_vars:
  - POSTGRES_USER
  - POSTGRES_PASSWORD
  - POSTGRES_DB
  - POSTGRES_PRISMA_URL
  - POSTGRES_URL_NON_POOLING
  - NEXT_TELEMETRY_DISABLED
actions: []
health_checks:
  - pg_isready
  - port_listening: 3000
backup_strategy: pg_dump + volume rsync (startos)
```
