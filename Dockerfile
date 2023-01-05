#Specify a base image
FROM node:16-alpine

#Specify work directory
WORKDIR /usr/app

#Install some dependencies
COPY ./package.json ./
RUN npm install

#Copy work files
COPY ./ ./

#Default command
CMD ["npm", "start"]