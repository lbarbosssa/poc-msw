# React Application

Este é o repositório de uma aplicação React. Aqui você encontrará as instruções para configurar o ambiente de desenvolvimento localmente e também como construir e rodar a aplicação usando Docker.

## Requisitos

- Node.js (v18 ou superior)

- npm (v6 ou superior)

- Docker (opcional)

## Instalação

Para iniciar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
cd poc-msw
```
2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Usando Docker

1. Construa a imagem Docker:

```bash
docker build -f Dockerfile -t poc-msw .
```
2. Construa a imagem Docker:
```bash
docker run -d -p 80:80 poc-msw
```

A aplicação estará disponível em `http://localhost`.

## Autor

Lucas Barbosa

Email: barbosa.lucas1996@gmail.com
