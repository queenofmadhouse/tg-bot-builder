FROM node:21-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY services/codegen ./

EXPOSE 3001
CMD ["node", "index.js"]
