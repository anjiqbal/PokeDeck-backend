import { pool } from "../db/index.js";

export async function getUsers() {
  // Query the database and return all users
  const query = `SELECT * from users`;
  const result = await pool.query(query);
  return result.rows;
}

export async function getUserById(id) {
  // Query the database and return the user with a matching id
  const values = [id];
  const query = `SELECT * from users WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function getUsernameFromUser(id) {
  // Query the database and return the Username with a matching id
  const values = [id];
  const query = `SELECT username from users WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function getPasswordFromUser(id) {
  // Query the database and return the Password with a matching id
  const values = [id];
  const query = `SELECT password from users WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function getProfileFromUser(id) {
  // Query the database and return the profile with a matching id
  const values = [id];
  const query = `SELECT profile from users WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function getDeckFromUser(id) {
  // Query the database and return the deck with a matching id
  const values = [id];
  const query = `SELECT deck from users WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function getWishlistFromUser(id) {
  // Query the database and return the wishlist with a matching id
  const values = [id];
  const query = `SELECT wishlist from users WHERE id = $1`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function createUser(user) {
  // Query the database to create a user and return the user info
  // dont add id - that will be added later - you need to add in the body [username, password, first_name, last_name, email]
  const values = [user.username, user.password, user.first_name, user.last_name, user.email];
  const query = `INSERT INTO users (username, password, first_name, last_name, email) VALUES ($1, $2, $3, $4, $5)`;
  const result = await pool.query(query, values);
  return result.rows;
}

export async function updateBookById(id, updates) {
  // Query the database to update a user and return the newly updated user
  const values = [id, updates.username, updates.password, updates.first_name, updates.last_name, updates.email];
  const query = `UPDATE users SET username = $2, password = $3, first_name = $4 last_name = $5 email = $6 WHERE id = $1 `
  const result = await pool.query(query, values)
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
