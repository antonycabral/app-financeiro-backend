# 💰 Finance App - Backend

API REST para gerenciamento de finanças pessoais desenvolvida com NestJS, TypeORM e PostgreSQL.

## 📋 Descrição

Backend da aplicação de controle financeiro que oferece autenticação JWT, gerenciamento de usuários e uma base sólida para futuras funcionalidades de gestão financeira.

## 🚀 Tecnologias

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript e JavaScript
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[JWT](https://jwt.io/)** - Autenticação via tokens
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)** - Criptografia de senhas
- **[Class Validator](https://github.com/typestack/class-validator)** - Validação de dados

## 📦 Funcionalidades Implementadas

### Autenticação
- ✅ Login com JWT
- ✅ Validação de credenciais
- ✅ Proteção de rotas

### Usuários
- ✅ Criação de usuários
- ✅ Listagem de usuários
- ✅ Busca por ID e email
- ✅ Atualização de dados
- ✅ Remoção de usuários
- ✅ Hash de senhas com bcrypt

## 🛠️ Instalação

```bash
# Clonar o repositório
git clone https://github.com/antonycabral/app-financeiro-backend.git

# Entrar na pasta do projeto
cd finance-backend

# Instalar dependências
npm install
```

## ⚙️ Configuração

Configure as variáveis de ambiente necessárias para conexão com o banco de dados PostgreSQL e configuração do JWT.

## 🎯 Executar o Projeto

```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod

# Modo debug
npm run start:debug
```

O servidor estará rodando em `http://localhost:3000`

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📁 Estrutura do Projeto

```
src/
├── auth/              # Módulo de autenticação
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
├── users/             # Módulo de usuários
│   ├── dto/          # Data Transfer Objects
│   ├── entities/     # Entidades TypeORM
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts      # Módulo principal
└── main.ts           # Arquivo de inicialização
```

## 🔐 Endpoints da API

### Autenticação
- `POST /auth/login` - Realizar login

### Usuários
- `POST /users` - Criar novo usuário
- `GET /users` - Listar todos os usuários
- `GET /users/:id` - Buscar usuário por ID
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Remover usuário

## 🎨 Recursos Técnicos

- **CORS habilitado** - Permite requisições cross-origin
- **Validação global** - ValidationPipe configurado globalmente
- **DTOs validados** - Validação automática de entrada de dados
- **Whitelist ativado** - Remove campos não permitidos
- **Transformação automática** - Conversão de tipos de dados

## 📝 Licença

Este projeto está sob a licença UNLICENSED.

## 👨‍💻 Autor

Desenvolvido durante o curso de Finanças App.
