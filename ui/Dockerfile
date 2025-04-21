FROM node:21-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY ui ./

EXPOSE 3003
CMD ["npm", "start"]
