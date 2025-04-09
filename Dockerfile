# base image
FROM node:20.15.0-alpine AS base
WORKDIR /app
RUN npm install --global --no-update-notifier --no-fund pnpm

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

COPY . .

RUN pnpm install

USER node
EXPOSE 4321

CMD ["pnpm", "run", "dev"]