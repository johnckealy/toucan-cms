FROM node:16-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . /app

COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

RUN yarn install
RUN yarn build

EXPOSE 3000

ENV PORT 3000

CMD [ "yarn", "start" ]
