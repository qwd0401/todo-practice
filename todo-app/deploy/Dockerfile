# Multi-stage build for production
FROM node:18-alpine AS backend

WORKDIR /app/backend

# Copy backend files
COPY backend/package*.json ./
RUN npm ci --only=production

COPY backend/ ./

# Frontend is served as static files
FROM node:18-alpine AS frontend

WORKDIR /app/frontend
COPY frontend/index.html ./

# Final production image
FROM node:18-alpine

WORKDIR /app

# Copy backend
COPY --from=backend /app/backend ./backend

# Copy frontend
COPY --from=frontend /app/frontend ./frontend

# Set environment
ENV NODE_ENV=production
ENV PORT=3001

# Expose port
EXPOSE 3001

# Start the application
WORKDIR /app/backend
CMD ["node", "server.js"]
