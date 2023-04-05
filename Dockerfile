FROM node:14.15.1-alpine3.12

WORKDIR /usr/src/app

COPY package.json .
COPY dist .

RUN apk update && \
    apk upgrade && \
    npm install --only=production && \
    apk add --no-cache curl

ENV NODE_ENV production
ENV DATABASE_URL postgres://<user>:<password>@<host>:<port>/<database>

EXPOSE 4000

CMD ["node", "main.js"]