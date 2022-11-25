FROM node:19-alpine3.15

USER root

RUN set -eux \
    & apk add \
    --no-cache \
    nodejs \
    yarn

WORKDIR /app


COPY ./src /app/src
COPY ./tsconfig.json /app
COPY ./package.json /app
COPY ./yarn.lock /app

RUN yarn install --only=production

RUN yarn build

CMD ["yarn", "run:build"]
EXPOSE 3001
