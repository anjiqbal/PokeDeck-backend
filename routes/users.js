import express from "express";

import * as bookController from "../controllers/books.js";

export const bookRoutes = express.Router();

bookRoutes.get("/", bookController.searchBooksByTitle);

bookRoutes.get("/", bookController.searchBooksByAuthor);

bookRoutes.get("/", bookController.getBooks);

bookRoutes.get("/:id", bookController.getBookById);

bookRoutes.post("/", bookController.createBook);

bookRoutes.patch("/:id", bookController.updateBookById);

bookRoutes.delete("/:id", bookController.deleteBookById);
