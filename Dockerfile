# Stage 1: build (clona repo, instala deps y compila Next + dashboard)
FROM node:20-alpine AS builder

WORKDIR /app

ARG GITHUB_TOKEN
ARG REPO_PATH="DevelopRobootics/XYZ"
ARG REPO_BRANCH="master"
ARG CACHE_BUST="dev"

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN apk add --no-cache git && \
    git clone --depth 1 --branch "${REPO_BRANCH}" \
    "https://${GITHUB_TOKEN}:x-oauth-basic@github.com/${REPO_PATH}.git" /tmp/source && \
    rm -rf /tmp/source/.git && \
    cp -R /tmp/source/. /app && \
    rm -rf /tmp/source && \
    echo "${CACHE_BUST}" > /cache-bust

RUN npm ci --no-fund --no-audit
RUN npm run build

# Stage 2: runtime (solo dependencias de producción + artefactos build)
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /cache-bust /cache-bust

RUN npm ci --omit=dev --no-fund --no-audit

EXPOSE 3000

CMD ["npm", "start"]
