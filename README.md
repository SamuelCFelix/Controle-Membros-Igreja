# ⛪ Controle de Membros de Igreja

Um sistema web completo e containerizado para **gerenciamento de membros de igreja**, desenvolvido com **React, Node.js, Prisma, PostgreSQL e Docker**.

O objetivo é oferecer uma solução **simples, intuitiva e moderna** para o controle de membros, substituindo planilhas manuais e tornando o processo de cadastro e consulta muito mais prático.

---

## 🧩 Funcionalidades

- 📋 **Cadastro de membros:** formulário com campos personalizados.
- 👀 **Listagem de membros:** exibição clara e organizada.
- ✏️ **Edição e exclusão:** gerencie informações facilmente.
- 💾 **Persistência de dados:** todas as informações ficam salvas no PostgreSQL.
- ⚙️ **API RESTful:** comunicação entre o frontend e backend via Express.
- 🐳 **Docker integrado:** execução completa do sistema com um único comando.

---

## 💡 Contexto do Projeto

Este projeto foi criado para atender uma **necessidade real de um familiar**, que precisava de uma forma simples de registrar os membros da igreja sem depender de planilhas.  
A aplicação é voltada para **uso prático**, mas foi desenvolvida com **boas práticas profissionais**, servindo também como **portfólio de desenvolvimento full stack**.

---

## 🧱 Arquitetura do Sistema

O sistema é composto por três serviços principais, todos orquestrados via **Docker Compose**:

| Serviço            | Função                                                | Tecnologias                |
| ------------------ | ----------------------------------------------------- | -------------------------- |
| **Frontend**       | Interface de cadastro e listagem de membros           | React + Vite + Material UI |
| **Backend**        | API responsável pela lógica e comunicação com o banco | Node.js + Express + Prisma |
| **Banco de Dados** | Armazena todos os dados dos membros                   | PostgreSQL 15              |

Toda a configuração e comunicação entre os serviços é feita automaticamente pelo Docker.

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />

</div>

---

## ⚙️ Estrutura do Projeto

ControleMembrosIgreja/
├── controlemembrosigreja-frontend/ # Aplicação React
├── controlemembrosigreja-backend/ # API Node.js com Prisma
├── data/ # Dados persistentes do PostgreSQL
├── docker-compose.yml # Configuração dos containers
├── .env # Variáveis de ambiente do sistema
├── .env.example # Modelo de configuração do .env
├── AÇÕES-SISTEMA #Ações .bat para iniciar, parar, reiniciar e atualizar o sistema

---

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

Antes de iniciar, instale:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

---

### 🧩 Segue o passo a passo

```bash

1. Clonar o repositório

git clone https://github.com/SamuelCFelix/Controle-Membros-Igreja.git
cd Controle-Membros-Igreja


2. Configurar as variáveis de ambiente

Na raiz do projeto, crie um arquivo .env baseado no .env.example.
Esse arquivo já contém as variáveis necessárias para o banco de dados e aplicações.

Exemplo:

# Banco de dados
POSTGRES_USER=usuario
POSTGRES_PASSWORD=senha
POSTGRES_DB=igreja_db

Os diretórios backend e frontend também possuem arquivos .env.example
— eles são opcionais e já funcionam com as variáveis da raiz se não forem alterados.

3. Iniciar o projeto com Docker

Com o Docker instalado, siga os passos abaixo na pasta raiz do projeto:

3.1 Construir os containers
docker compose build

3.2 Subir o sistema em segundo plano
docker compose up -d

3.3 Configurar o banco de dados (Prisma)

Execute os comandos abaixo dentro do container do backend para gerar o cliente Prisma e aplicar as migrações do banco de dados:

docker exec igreja_backend npx prisma generate
docker exec igreja_backend npx prisma migrate deploy


💡 Esses comandos só precisam ser executados na primeira vez ou quando houver alterações no schema do Prisma.

4. Acessar a aplicação

Após a inicialização, acesse no navegador:

Frontend: http://localhost

Backend (API): http://localhost:3000/api

5. Adicione os membros e comece a utilizar :)

```

---

### 👨‍💻 Autor

Samuel Cardoso Félix
💼 Software Engineer | Full Stack Developer
🚀 React | Node.js | Docker | PostgreSQL | Prisma

🔗 LinkedIn: https://www.linkedin.com/in/samuelcfelix/

🔗 GitHub: https://github.com/SamuelCFelix

📝 Licença

Este projeto é de uso livre para fins de estudo e demonstração.
© 2025 Samuel Cardoso Félix
