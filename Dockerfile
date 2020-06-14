# Specify a base image
FROM node:alpine

# Copy required files from repository
COPY package.json index.js ./

# Install dependencies
RUN npm install

# Default command
CMD ["npm", "start"]