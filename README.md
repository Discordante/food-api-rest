# Food API

A REST API built with NestJS for managing a food catalog is an educational project aimed at demonstrating the principles of web API development using a modern Node.js framework. This project serves as a practical guide to understanding API design, database management and more. The main goal of this API is to manage detailed information about various dishes, including their ingredients, nutritional values, potential allergens, and tags or categories to help users find and select dishes based on specific dietary preferences or needs.

## Technologies Used
- **NestJS**

  - [NestJS](https://nestjs.com/) is a powerful Node.js framework for building scalable and maintainable server-side applications.
  - It provides features like dependency injection, decorators, and a modular architecture, making it an excellent choice for creating APIs and web applications.

- **Prisma**

  - [Prisma](https://www.prisma.io/) is an intuitive ORM (Object-Relational Mapping) for TypeScript and JavaScript.
  - It simplifies database operations and management, including schema creation, querying, and migrations.
  - Prisma streamlines database interactions, making it easier to work with databases in your application.

- **PostgreSQL**
  - [PostgreSQL](https://www.postgresql.org/) is a robust, open-source relational database management system.
  - It is known for its exceptional performance and reliability.
  - PostgreSQL is a popular choice for handling structured data in applications and offers features like ACID compliance and extensibility.

These technologies, when combined, provide a solid foundation for building efficient, maintainable, and feature-rich applications.

## Installation

```bash
npm install
```

## Prisma

### Code Generation

To generate TypeScript code corresponding to your data model in Prisma, use the following command:

```bash
npx prisma generate
```

### Database Migrations

It is important to make these changes pointing to the localhost dbdd, to avoid possible errors.
Database migrations are crucial for maintaining the integrity of your database as your application evolves. To create a migration without applying it, use the following command:

```bash
npx prisma migrate dev --create-only
```

This command will generate a migration file in the prisma/migrations folder without applying the migration to the database.
When uploading the branch, the database changes specified in the migration will be applied.

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```# food-api-rest
