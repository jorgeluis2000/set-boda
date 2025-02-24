FROM node:20-alpine as builder

# Create app directory
WORKDIR /backend
RUN npm i -g pnpm
# Install app dependencies
COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile -D

COPY . .

RUN pnpm build

FROM node:20-alpine as runtime

RUN npm i -g pnpm

WORKDIR /backend

COPY --from=builder /backend/package*.json ./
COPY --from=builder /backend/pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile -P

COPY --from=builder /backend/dist ./src/
COPY --from=builder /backend/prisma ./prisma/

RUN pnpm prisma:generate

CMD [ "pnpm", "start:app" ]
