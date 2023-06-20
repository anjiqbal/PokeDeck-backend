

import * as userModel from "../models/users";

export async function getDeckFromUser(req, res, next) {
  if (req.query.title !== undefined) {
    const decks = await userModel.searchBooksByTitle(req.query.user_id);
    return res.json({ success: true, payload: decks });
  }
  next();
}

export async function getUsernameFromUser(req, res, next) {
  if (req.query.username !== undefined) {
    const username = await userModel.getUsernameFromUser(req.query.username);
    return res.json({ success: true, payload: username });
  }
}


export async function getPasswordFromUser(req, res, next) {
  if (req.query.password !== undefined) {
    const password = await userModel.getPasswordFromUser(req.query.password);
    return res.json({ success: true, payload: password });
  }
}






export async function getUsers(req, res) {
  const users = await userModel.getUsers();
  res.json({ success: true, payload: users });
}

export async function getUserById(req, res) {
  const user = await userModel.getUserById(req.params.id);
  res.json({ success: true, payload: user });
  next();
}

export async function createUser(req, res) {
  const data = req.body;
  const user = await userModel.createUser(data);
  res.json({ success: true, payload: user });

}

export async function updateUserById(req, res) {
  const data = req.body;
  const book = await userModel.updateUserById(req.params.id, data);
  res.json({ success: true, payload: book });
}

export async function deleteUserById(req, res) {
  const user = await userModel.deleteUserById(req.params.id);
  res.json({ success: true, payload: user });
}
