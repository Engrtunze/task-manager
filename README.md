<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
# 📝 Task Management System API Documentation

Welcome to the Task Management System API documentation! This comprehensive guide will walk you through everything you need to know to understand, use, and contribute to the API. Let's get started! 🚀

## 📋 Table of Contents

- [Introduction](#-introduction)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#-api-endpoints)
  - [Authentication](#authentication)
  - [Task Management](#task-management)
- [WebSocket Integration](#-websocket-integration)
- [Data Models](#-data-models)
- [Error Handling](#-error-handling)
- [Conclusion](#-conclusion)

## 🌟 Introduction

This API provides a simple task management system with user authentication, task CRUD operations, and real-time updates via WebSockets. The application is built using NestJS and TypeORM.

## 🛠 Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM for TypeScript and JavaScript.
- **SQLite**: A lightweight database.
- **JWT**: JSON Web Tokens for secure user authentication.
- **WebSockets**: For real-time data updates.

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A code editor (e.g., VSCode)

### 🔧 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd task-management-api

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

 **The application will be running at http://localhost:3000.**:

 ## 🔗 API Endpoints Documentation can be found http://localhost:3000/v1/docs#/
 ## to call an api endpoint http://localhost:3000/v1/{endpoints}
 
## 🗂 Data Models

### User

- `id`: number (primary key)
- `username`: string (unique)
- `firstname`: string
- `lastname`: string
- `password`: string
- `lastlogin`: Date

### Task

- `id`: number (primary key)
- `title`: string
- `description`: string
- `status`: string
- `deleted`: boolean (default: `false`)
- `user`: User (many-to-one relationship)

## ❗ Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. Here are some common status codes you might encounter:

- **200 OK**: The request was successful.
- **201 Created**: The resource was successfully created.
- **400 Bad Request**: The request was invalid.
- **401 Unauthorized**: Authentication failed.
- **404 Not Found**: The requested resource was not found.
- **500 Internal Server Error**: An error occurred on the server.

## 🚀 Conclusion

Thank you for using the Task Management System API! I hope this documentation has provided you with all the information you need to get started and effectively use the API. If you have any questions or need further assistance, feel free to reach out.

Happy coding and testing! 🎉🚀
