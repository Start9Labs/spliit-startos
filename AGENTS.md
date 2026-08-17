# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Postgres is started with an explicit `listen_addresses=127.0.0.1`.** It shares the service's network namespace with the app, and nothing else should be able to reach it.
- **Spliit has no accounts.** A group's URL is its only access control — don't document or design around a login that does not exist.
- **The app container mounts no volume.** All state is in the database; anything that needs to persist belongs there or in `store.json`.
