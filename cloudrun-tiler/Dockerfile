# Use an official Entwine image maintained by Connor Manning
FROM connormanning/entwine:latest

# Set working directory
WORKDIR /app

# Copy Node.js files
COPY package*.json ./
RUN npm install

# Copy the rest of your server code
COPY . .

# Set port for Cloud Run
ENV PORT=8080
EXPOSE 8080

# Start server
CMD ["npm", "start"]
