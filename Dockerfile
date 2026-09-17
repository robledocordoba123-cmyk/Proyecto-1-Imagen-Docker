# Imagen base liviana con Node.js fijando versión
FROM node:20-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero solo los manifiestos para aprovechar la cache de capas
COPY package*.json ./

# Instalamos dependencias de producción
RUN npm install --production

# Copiamos el resto del código fuente
COPY . .

# Puerto en el que escucha la app dentro del contenedor
EXPOSE 3000

# Comando de arranque del contenedor
CMD ["node", "src/server.js"]
