

import * as bookModel from "../models/books.js";

export async function searchBooksByTitle(req, res, next) {
  if (req.query.title !== undefined) {
    const books = await bookModel.searchBooksByTitle(req.query.title);
    return res.json({ success: true, payload: books });
  }
  next();
}

export async function searchBooksByAuthor(req, res, next) {
  if (req.query.author !== undefined) {
    const books = await bookModel.searchBooksByAuthor(req.query.author);
    return res.json({ success: true, payload: books });
  }
  next();
}

export async function getUsers(req, res) {
  const books = await bookModel.getBooks();
  res.json({ success: true, payload: books });
}

export async function getBookById(req, res) {
  const book = await bookModel.getBookById(req.params.id);
  res.json({ success: true, payload: book });
}

export async function createBook(req, res) {
  const data = req.body;
  const book = await bookModel.createBook(data);
  res.json({ success: true, payload: book });
}

export async function updateBookById(req, res) {
  const data = req.body;
  const book = await bookModel.updateBookById(req.params.id, data);
  res.json({ success: true, payload: book });
}

export async function deleteBookById(req, res) {
  const book = await bookModel.deleteBookById(req.params.id);
  res.json({ success: true, payload: book });
}
