FROM node:18-alpine

WORKDIR /app

COPY packages*.json ./

RUN npm install

COPY . /app

EXPOSE 8080

CMD [ "npm", "start" ]