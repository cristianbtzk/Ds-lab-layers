FROM node:latest
WORKDIR /usr/src/app

COPY . .

RUN npm install
ENTRYPOINT [ "npm", "start" ]
EXPOSE 3000