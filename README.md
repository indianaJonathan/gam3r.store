# Gam3r.store

This is a teplate e-commerce app

## Quick start

Install dependencies

```shell
yarn add
```

Create the .env file for the backend project (~/apps/backend)

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/mydb?schema=gam3r.store"
```

Create and run the PostgreSQL docker

```shell
docker compose up -d
```

Run the project

```shell
yarn run dev
```

Access de [web local environment](http://localhost:3000)

> This project were build during the [Cod3r Cursos](https://www.formacao.dev/) event
