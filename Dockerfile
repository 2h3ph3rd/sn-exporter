FROM node:15.4.0

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 8080

RUN yarn run build

CMD [ "node", "server.js" ]