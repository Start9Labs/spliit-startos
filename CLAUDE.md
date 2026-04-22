## How the upstream version is pulled
- Image `main` is `dockerTag: ghcr.io/spliit-app/spliit:<version>` in `startos/manifest/index.ts`
- Bump the tag to upgrade. Upstream publishes via their own CI on every git tag
- Available tags: https://github.com/spliit-app/spliit/pkgs/container/spliit

> Upstream publishes multi-arch (amd64/arm64) images to GHCR, so we no longer
> build anything ourselves. If upstream stops publishing or an unreleased
> feature is needed, the previous approach (custom Dockerfile fetching a
> tarball at a pinned SHA) lives in git history at commit `791c8d7`.
