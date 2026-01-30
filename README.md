@"
# Sistema de Cadastro Full Stack

Este projeto consiste em um sistema de gestão de usuários composto por uma aplicação frontend desenvolvida em React e um servidor backend construído com Node.js e Prisma ORM, utilizando PostgreSQL como banco de dados.

## Tecnologias Utilizadas

### Frontend
* React
* Vite
* CSS3

### Backend
* Node.js
* Express
* Prisma ORM

### Banco de Dados
* PostgreSQL

## Configuração do Ambiente

### Requisitos Prévios
* Node.js instalado
* PostgreSQL em execução

### Instalação do Backend

1. Navegue até a pasta do servidor:
   cd server

2. Instale as dependências:
   npm install

3. Configure o arquivo .env na raiz da pasta server com a sua string de conexão:
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"

4. Execute as migrações do Prisma:
   npx prisma generate

5. Inicie o servidor:
   npm run dev

### Instalação do Frontend

1. Retorne à raiz do projeto e instale as dependências:
   npm install

2. Inicie a aplicação:
   npm run dev

## Estrutura de Pastas

* server/: Contém toda a lógica do backend, configurações do Prisma e conexão com o banco de dados.
* src/: Contém os componentes React, arquivos de estilo e lógica do frontend.
* server/prisma/: Contém o esquema do banco de dados.

## Funcionalidades

* Cadastro de usuários com validação de campos.
* Armazenamento persistente em banco de dados relacional.
* Integração via API REST utilizando JSON.
