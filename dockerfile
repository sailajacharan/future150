FROM node:latest

MAINTAINER Zachary McKinnon

COPY . /var/www/future150
WORKDIR /var/www/future150

RUN npm install

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]
