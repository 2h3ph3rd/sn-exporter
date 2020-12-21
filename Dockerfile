FROM node:15.4.0

# installing global libs not present in package.json
RUN npm i -g md-to-pdf

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

CMD ["node", "./bin/www"]