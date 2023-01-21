FROM node:lts-alpine

ARG DISCORD_TOKEN

ENV DISCORD_TOKEN=${DISCORD_TOKEN}
ENV TZ=Asia/Tokyo

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD npx ts-node index.ts
