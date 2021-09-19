FROM node:14-alpine

WORKDIR /client

COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "start"]