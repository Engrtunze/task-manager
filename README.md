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



## ⚠️ Caution

The secret keys in this project were intentionally exposed because it's a test project. If this were a live or real project, sensitive information such as secret keys and database credentials would not be pushed with the code. Exposing such information is a bad security practice. However, for the sake of ease and to quickly test and move forward, some things were left intentionally exposed.

I always make sure to follow the best security practices and keep my sensitive information secure in real-world projects.



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
- postgres database
- mikroorm

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


## 🗄️ Database Migration

To ensure the database schema is up-to-date, you need to run the database migrations. Follow these steps:

1. **Generate Migration**: If you make changes to the entities, generate a new migration.
   ```bash
   npx run mikro-orm migration:create
2. **Run Migration**: Apply the migrations to the database.
   ```bash
   npx run mikro-orm migration:up

By default, the project is configured to use PostgreSQL. Ensure your PostgreSQL server is running and the connection details in the .env file are correct.
## WebSocket Session

This section provides an overview of how to set up and use WebSocket sessions in our application.

### Overview

WebSockets provide a full-duplex communication channel over a single TCP connection. This allows for real-time data transfer between the server and client, which is particularly useful for applications that require frequent updates such as chat applications, live notifications, and gaming.

### Establishing a Connection

To establish a WebSocket connection, follow these steps:

after running the app you can test websocket using postman 
- click on new then select websocket

![](/Users/engrtunze/Documents/Screenshot 2024-05-19 at 9.36.08 PM.png)

- click on the icon closer to the url then select socket.io just like the image below

![](/Users/engrtunze/Documents/Screenshot 2024-05-19 at 9.35.28 PM.png)

* then type in the url as seen in the image afterwards add the events to be listen to in the event tab
####  Events
- taskCreated
- taskUpdated
- taskDeleted
- taskRetrieved
http://localhost:3000/events
![](/Users/engrtunze/Documents/Screenshot 2024-05-19 at 9.35.40 PM.png)

N:B :- always make sure you click on connect everytime the server restarts 


## ❗ Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. Here are some common status codes you might encounter:

- **200 OK**: The request was successful.
- **201 Created**: The resource was successfully created.
- **400 Bad Request**: The request was invalid.
- **401 Unauthorized**: Authentication failed.
- **404 Not Found**: The requested resource was not found.
- **500 Internal Server Error**: An error occurred on the server.


## 🌟 Potential Improvements

While this project is a take home assessment also not phasing live users in large quantity the project follows the KISS (Keep It Simple, Stupid) principle to ensure clarity and simplicity, there are several enhancements that could be made to improve the functionality, scalability, and robustness of the system:

- **🛡️ Enhanced Security**: Implement additional security measures such as rate limiting, authentication guard for the websocket access in other to control access to who can view the live-streamed data.
- **📈 Scalability**: Use a more robust database management consider implementing database sharding or partitioning to handle larger datasets and high traffic.
- **🔍 Advanced Filtering and Searching**: Add more advanced filtering, searching, and sorting capabilities to the task management endpoints to improve usability, especially for users with many tasks.
- **📆 Task Scheduling**: Implement task scheduling features, such as setting due dates and reminders, and adding support for recurring tasks.
- **📊 Analytics and Reporting**: Develop analytics and reporting features to provide insights into task completion rates, productivity trends, and other useful metrics.
- **🐳 Dockerizing**: Containerize the application using Docker to simplify deployment and ensure consistency across different environments in other to ease time to run or even test the project.

These improvements could significantly enhance the functionality and user experience of the Task Management System. However, for the scope of this project, i have prioritized simplicity and core functionality to adhere to the KISS principle.


## 🚀 Conclusion

Thank you for using the Task Management System API! I hope this documentation has provided you with all the information you need to get started and effectively use the API. If you have any questions or need further assistance, feel free to reach out.

Happy coding and testing! 🎉🚀
