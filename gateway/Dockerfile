FROM node:21-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY gateway ./

EXPOSE 3000
CMD ["node", "index.js"]
