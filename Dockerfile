FROM node:16.17.0

WORKDIR /prode/front
COPY ./package*.json ./
RUN npm install

CMD "npm start .env"