# Usa imagem leve do Node
FROM node:18-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro
COPY package*.json ./

# Instala dependências (sem devDependencies se for produção)
RUN npm install --production

# Copia o restante do código
COPY . .

# Gera o client do Prisma (se existir)
RUN npx prisma generate

# Expõe a porta da API
EXPOSE 3000

# Comando padrão
CMD ["npm", "start"]
