# 1. Use an official Node base image
FROM node:20

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# 4. Copy the rest of your app
COPY . .

# 5. Expose the default Vite port
EXPOSE 5173

# 6. Run the dev server
CMD ["npm", "run", "dev"]
