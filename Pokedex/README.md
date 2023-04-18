<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

Pokedex API Project

Stack:

* Nest
* MongoDB

# For developent

1.- Clone repository

2.- Execute

## Installation

```bash
$ yarn install
```

3.- Install Nest CLI

```bash
$ npm i -g @nestjs/cli
```

4.- Up mongo BD Instance

```bash
$ docker-compose up -d
```

# DB Seed

Run this endpoint

http://localhost:3001/api/v2/seed

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
