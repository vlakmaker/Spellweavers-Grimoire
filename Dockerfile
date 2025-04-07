# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the static files
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist /app/dist
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]