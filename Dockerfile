# Stage 1: build (usa el contexto local, instala deps y compila Next + dashboard)
FROM node:20-slim AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=6144"
ENV NEXT_SWC_WORKER_COUNT=1
ENV NEXT_PRIVATE_BUILD_WORKERS=1

# Copiamos todo el contexto (el .dockerignore evita node_modules/.next/.git)
COPY . .

RUN npm install --no-fund --no-audit
RUN npm run build

# Stage 2: runtime (solo dependencias de producción + artefactos build)
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS="--max-old-space-size=6144"
ENV NEXT_SWC_WORKER_COUNT=1
ENV NEXT_PRIVATE_BUILD_WORKERS=1

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN npm ci --omit=dev --no-fund --no-audit

EXPOSE 3000

CMD ["npm", "start"]
