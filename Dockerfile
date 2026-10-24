ARG IMAGE
FROM ${IMAGE}
# Upstream's Node predates the October 2026 security release.
COPY --from=node:26.12.1-alpine3.24 /usr/local/bin/node /usr/local/bin/node
ENV NODE_VERSION=26.12.1
