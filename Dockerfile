# syntax=docker/dockerfile:1

# Bump SPLIIT_REF to upgrade upstream. Any git ref (tag, branch, commit SHA) works.
# Current: tag 1.19.1 + commit "add BTC to currency list" (547a0e7)
ARG SPLIIT_REF=547a0e71fc3bdb8e583b927100da23b8e12e621d

# Source fetch runs on the build host, not under qemu, so it can't flake during
# emulated aarch64 builds. curl --retry handles transient GitHub hiccups.
FROM --platform=$BUILDPLATFORM alpine:3.20 AS source
ARG SPLIIT_REF
RUN apk add --no-cache ca-certificates curl tar
WORKDIR /src
RUN curl --fail --location --retry 10 --retry-all-errors --retry-delay 5 \
        "https://github.com/spliit-app/spliit/archive/${SPLIIT_REF}.tar.gz" \
        -o /tmp/spliit.tar.gz && \
    tar -xzf /tmp/spliit.tar.gz --strip-components=1 && \
    rm /tmp/spliit.tar.gz

FROM node:21-alpine AS base

# Aggressive npm retry/timeout config — npm ci runs under qemu for aarch64
# and has historically hit ECONNRESET during large installs.
ENV NPM_CONFIG_FETCH_RETRIES=10 \
    NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=20000 \
    NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=120000 \
    NPM_CONFIG_FETCH_TIMEOUT=600000

WORKDIR /usr/app
COPY --from=source /src/package.json \
                   /src/package-lock.json \
                   /src/next.config.mjs \
                   /src/tsconfig.json \
                   /src/reset.d.ts \
                   /src/tailwind.config.js \
                   /src/postcss.config.js ./
COPY --from=source /src/scripts ./scripts
COPY --from=source /src/prisma ./prisma

RUN apk add --no-cache openssl && \
    npm ci --ignore-scripts && \
    npx prisma generate

COPY --from=source /src/src ./src
COPY --from=source /src/messages ./messages

ENV NEXT_TELEMETRY_DISABLED=1

RUN cp scripts/build.env .env && npm run build

RUN rm -r .next/cache

FROM node:21-alpine AS runtime-deps

ENV NPM_CONFIG_FETCH_RETRIES=10 \
    NPM_CONFIG_FETCH_RETRY_MINTIMEOUT=20000 \
    NPM_CONFIG_FETCH_RETRY_MAXTIMEOUT=120000 \
    NPM_CONFIG_FETCH_TIMEOUT=600000

WORKDIR /usr/app
COPY --from=base /usr/app/package.json /usr/app/package-lock.json /usr/app/next.config.mjs ./
COPY --from=base /usr/app/prisma ./prisma

RUN npm ci --omit=dev --omit=optional --ignore-scripts && \
    npx prisma generate

FROM node:21-alpine AS runner

EXPOSE 3000/tcp
WORKDIR /usr/app

COPY --from=base /usr/app/package.json /usr/app/package-lock.json /usr/app/next.config.mjs ./
COPY --from=runtime-deps /usr/app/node_modules ./node_modules
COPY --from=source /src/public ./public
COPY --from=source /src/scripts ./scripts
COPY --from=base /usr/app/prisma ./prisma
COPY --from=base /usr/app/.next ./.next

ENTRYPOINT ["/bin/sh", "/usr/app/scripts/container-entrypoint.sh"]
