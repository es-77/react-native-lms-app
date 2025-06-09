# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install Expo CLI globally
RUN npm install -g expo-cli

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose ports
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Start the application
CMD ["npm", "start"] 