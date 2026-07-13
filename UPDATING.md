# Updating the upstream version

This package pulls two prebuilt images: Spliit itself from GHCR and Postgres from Docker Hub. Both pins live in `startos/manifest/index.ts`.

## Determining the upstream version

**Spliit** — [`spliit-app/spliit`](https://github.com/spliit-app/spliit)

**Upstream does not publish a GHCR image for every GitHub release — read the image tags, not the release list.** Release `1.19.1` (Dec 2025) has no image and never got one; pinning it from the release tag broke the build until the pin was reverted to `1.19.0`.

```sh
token=$(curl -fsSL "https://ghcr.io/token?scope=repository:spliit-app/spliit:pull&service=ghcr.io" | jq -r .token)
curl -fsSL -H "Authorization: Bearer $token" "https://ghcr.io/v2/spliit-app/spliit/tags/list" | jq -r '.tags[]'
```

Bump only to a tag this returns. The pin lives in `startos/manifest/index.ts` at `images.main.source.dockerTag`.

**Postgres** — [`postgres` on Docker Hub](https://hub.docker.com/_/postgres)

```sh
curl -fsSL "https://hub.docker.com/v2/repositories/library/postgres/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
```

We track the `16-alpine` line; only bump within the same major (Postgres major upgrades require a `pg_upgrade` migration, not just a tag bump). The pin lives in `startos/manifest/index.ts` at `images.postgres.source.dockerTag`.

## Applying the bump

**Spliit:** in `startos/manifest/index.ts`, set `images.main.source.dockerTag` to `ghcr.io/spliit-app/spliit:<new version>`.

**Postgres:** in `startos/manifest/index.ts`, set `images.postgres.source.dockerTag` to `postgres:<new tag>` (stay on the `16-alpine` line unless intentionally doing a major upgrade).

If upstream stops publishing GHCR images or an unreleased feature is needed, the previous approach (custom Dockerfile fetching a tarball at a pinned SHA) lives in git history at commit `791c8d7`.
