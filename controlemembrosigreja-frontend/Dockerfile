# Etapa 1: Build do app
FROM node:22-alpine AS build

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Gera o build de produção
RUN npm run build

# Etapa 2: Servir com Nginx
FROM nginx:alpine

# Copia o build gerado para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuração customizada para suportar rotas SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Inicia o servidor
CMD ["nginx", "-g", "daemon off;"]
