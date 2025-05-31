# 📚 Book Store REST API

A simple RESTful API for managing books in a bookstore, built with **Node.js**, **Express.js**, and **MongoDB**. This API supports full CRUD operations.

## 🔧 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv

---

## 🚀 Features

* Add a new book
* Retrieve all books
* Update book details
* Delete a book

---

## 📁 Project Structure

```
bookstore-api/
├── models/          # Mongoose schema for Book
├── routes/          # API route definitions
├── index.js        # Entry point of the server
├── .env             # Environment variables (MongoDB URI, Port)
├── package.json     # Project metadata and dependencies
```

---

## 📦 Installation

### Prerequisites

* Node.js installed
* MongoDB running locally or a MongoDB Atlas URI

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/bookstore-api.git
   cd bookstore-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```env
   MONGODB_URI=mongodb://localhost:27017/bookstore
   PORT=5000
   ```

4. **Start the server**

   ```bash
   npm run start
   ```

The server should be running at `http://localhost:5000`.

---

## 📬 API Endpoints

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| GET    | `/books`     | Get all books  |
| POST   | `/books`     | Add a new book |
| PUT    | `/books/:id` | Update a book  |
| DELETE | `/books/:id` | Delete a book  |

### 📘 Example JSON Body for POST / PUT

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10.99,
  "publishedDate": "1925-04-10"
}
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
