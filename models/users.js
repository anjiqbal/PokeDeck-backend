import { pool } from "../db/index.js";

export async function getBooks() {
  // Query the database and return all books
  const query = `SELECT * from books`;
  const result = await pool.query(query);
  return result.rows;
}

export async function searchBooksByTitle(searchTerm) {
  // Query the database and return all books that have a matching title matching the searchTerm
  const values = [`%${searchTerm}%`];
  const query = `SELECT * from books WHERE title LIKE $1`;
  const result = await pool.query(query, values);
  console.log(result);
  return result.rows;
}

export async function searchBooksByAuthor(searchTerm) {
  // Query the database and return all books that have an author name matching the searchTerm
  const values = [searchTerm];
  const query = `SELECT b.title FROM books AS b JOIN authors AS a ON a.id = b.author_id WHERE first_name = $1 OR last_name = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function getBookById(id) {
  // Query the database and return the book with a matching id
  const values = [id];
  const query = `SELECT * from books WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function createBook(book) {
  // Query the database to create a book and return the newly created book
  const values = [book.author_id, book.title, book.published_date];
  const query = `INSERT INTO books (author_id, title, published_date) VALUES ($1, $2, $3)`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function updateBookById(id, updates) {
  // Query the database to update a book and return the newly updated book
  const values = [id, updates.author_id, updates.title, updates.published_date]
  const query = `UPDATE books SET author_id = $2, title = $3, published_date = $4 WHERE id = $1 `
  const result = await pool.query(query, values)
  return result.rows;
}

export async function deleteBookById(id) {
  // Query the database to delete a book and return the deleted book
  const values = [id]
  const query = 'DELETE from books WHERE id = $1'
  const result = await pool.query(query, values)
  return result.rows;
}
