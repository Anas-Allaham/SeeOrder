# Use the official Node.js image
FROM node:20

# Set the working directory
WORKDIR /Anas/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
