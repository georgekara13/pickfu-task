FROM node:14-alpine

WORKDIR /client

COPY package.json package-lock.json ./
RUN npm install

CMD ["npm", "start"]

# Normally, this shouldnt be used for production
# We would need to configure a multistage build
# the first stage, would minify & build the assets
# and the second stage, would serve the built assets with nginx