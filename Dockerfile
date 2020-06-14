# Specify a base image
FROM node:alpine

# Specify a work directory
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy required files from repository
COPY . .

# Default command
CMD ["npm", "start"]