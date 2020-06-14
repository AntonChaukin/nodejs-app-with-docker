# Specify a base image
FROM node:alpine

# Specify a work directory
WORKDIR /usr/app

# Copy required files from repository
COPY package.json index.js ./

# Install dependencies
RUN npm install

# Default command
CMD ["npm", "start"]