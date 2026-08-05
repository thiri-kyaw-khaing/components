# ---------- Dependencies ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- Build ----------
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1

# Public (browser-exposed) backend origin is inlined at build time. Passed in by
# docker-compose; defaults to localhost for a bare `docker build`.
ARG NEXT_PUBLIC_BACKEND_ORIGIN=http://localhost:8080
ENV NEXT_PUBLIC_BACKEND_ORIGIN=$NEXT_PUBLIC_BACKEND_ORIGIN
RUN npm run build

# ---------- Runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Run as a non-root user.
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Standalone output: server bundle + static assets + public files.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
# server.js honors these; HOSTNAME must be 0.0.0.0 so other containers/the proxy
# can reach it.
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
