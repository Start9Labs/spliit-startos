## How the upstream version is pulled
- Source is fetched at Docker build time via `ARG SPLIIT_REF` in `Dockerfile`
- Bump the `SPLIIT_REF` value (accepts any git ref: tag, branch, commit SHA) to upgrade
- Image `main` is `dockerBuild` (no dockerTag to update)

> No git submodule. The upstream Dockerfile is not used — we own a wrapper that
> downloads an upstream tarball and builds it, adding qemu-friendly npm retry
> config that the upstream Dockerfile lacks.
