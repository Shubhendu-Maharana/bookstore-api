import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/books.js";
import connectDB from "./db/db.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
