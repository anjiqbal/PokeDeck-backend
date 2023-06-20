import express from "express";

import * as deckController from "../controllers/decks";

export const deckRoutes = express.Router();
// get all decks
deckRoutes.get("/", deckController.getDecks);
// get deck by id
deckRoutes.get("/:deck_id", deckController.getDeckById);
// create new deck
deckRoutes.post("/", deckController.createDeck);
// add card to deck by id
deckRoutes.post("/:deck_id", deckController.createDeck);
// update name of deck
deckRoutes.patch("/:deck_id", deckController.createDeck);
// delete card of specific id.
deckRoutes.delete("/:deck_id", deckController.updateDeckById);
// delete deck
deckRoutes.delete("/:deck_id", deckController.deleteDeckById);