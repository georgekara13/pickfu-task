FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

COPY . .

# Exports
EXPOSE 3001

CMD ["npm", "run", "server"]