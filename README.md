## DESAFIO TÉCNICO

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript.

## Installation

```bash
$ yarn install
```

## Running the app

```bash

# watch mode
$ yarn start:dev

```

## API
- BASE_URL: http://localhost:3334/api/v1/

## SWAGGER
- URL: http://localhost:3334/doc-api

## BANCO DE DADOS
- LINK: [Banco de dados mongo](https://dashboard.absam.io/service/41513/webssh).
- USER: admin
- PASSWORD: yaukj0qjznq5@

## GOFILE
- Email - leandro.p.n96@gmail.com

## DESCRIPTION API ENDPOINTS

USERS:
  - POST  /import
  import -> Busca os usuarios na LinkApi e salva no banco de dados mongodb.
  - GET /report
  import -> Busca todos os usuarios no banco, criao csv e salva o arquivo no GoFile.

FOLDERS:
  - POST /folders -> Cria uma nova pasta

FILES:
  - POST /files -> Salva o arquivo
  - DELETE /files/{name}/folder/{folder} - Remove o arquivo

## AUTHOR
- Leandro Pereira Nunes - [github](https://github.com/leandropn96)
 
