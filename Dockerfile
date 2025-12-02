# FROM node:18-alpine

FROM node:18-bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

# Instalar libssl1.1 (si está disponible para tu distribución)
#RUN apt-get update && apt-get install -y libssl1.1

COPY . .

RUN npm run prisma:generate && npm run build && npm run postbuild

# Define las variables de entorno
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]