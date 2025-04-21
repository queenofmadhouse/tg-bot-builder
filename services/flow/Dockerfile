FROM node:21-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npx prisma generate
COPY generated/prisma_client ./generated/prisma_client

COPY services/flow ./

EXPOSE 3002
CMD ["node", "index.js"]
