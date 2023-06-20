import express from "express";

import * as userController from "../controllers/users";

export const userRoutes = express.Router();
// get all users
userRoutes.get("/", userController.getUsers);
// get user by id
userRoutes.get("/:id", userController.getUserById);
// get username from user
userRoutes.get("/:id/username", userController.getUsernameFromUser);
//  get password from user
userRoutes.get("/:id/password", userController.getPasswordFromUser);
//  get user profile
// userRoutes.get("/:id/profile", userController.getProfileFromUser);
// get user deck
// userRoutes.get("/:id/deck", userController.getDeckFromUser);
// get user wishlist
// userRoutes.get("/:id/wishlist", userController.getWishlistFromUser);
// create new user
userRoutes.post("/", userController.createUser);
// update password for user (possibly a patch instead of a post)
// userRoutes.post("/:id/password", userController.resetUserPassword); --- figure out functionality (is it a post or a patch?)
// Update user
userRoutes.patch("/:id", userController.updateUserById);
// delete user
userRoutes.delete("/:id", userController.deleteUserById);
