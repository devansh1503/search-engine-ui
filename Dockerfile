# Use a modern Node version – important!
FROM node:22-alpine

WORKDIR /app

# Install deps
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./
RUN npm install  # or yarn / pnpm

# Copy source
COPY . .

# Vite dev server
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]