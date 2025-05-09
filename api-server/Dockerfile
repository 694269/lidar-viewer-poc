# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files needed for server
COPY . .

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=8080

# Expose port (Cloud Run expects the app to listen on $PORT)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
