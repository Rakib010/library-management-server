## 📚 Library Management API

A RESTful API for managing books (CRUD operations) and borrowing records, built with Node.js, Express, TypeScript, and MongoDB (Mongoose).

This project provides endpoints to create, read, update, and delete books, as well as handle borrowing operations with proper validation, error handling, and aggregation reporting.

## 🚀 Features

- 📘 Add, update, delete, and fetch books
- 📖 Borrow and return books
- ✅ Validation and error handling
- 📊 Borrow summary reports with aggregation
- 🔐 Secure and structured API

## 🛠️ Tech Stack

- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Tools: TypeScript

## ⚙️ Setup Instructions

- Clone the repository:

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api.
```

- Install dependencies

```
npm install
```

- Create a .env file and add:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/library-db
NODE_ENV=development
```

- Run the server

```
npm run dev

```
