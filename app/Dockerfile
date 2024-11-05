FROM node:alpine

WORKDIR /app

# copia do package.json para o container
COPY package.json /app/
# instalacao das dependencias
RUN npm install
COPY . .
EXPOSE 3000

# comandos para iniciar a aplicação
CMD [ "npm", "start" ]