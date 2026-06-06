const express = require("express");

const {
  getRooms,
  getRoom
} = require("../controllers/roomController");

const router = express.Router();

router.get("/", getRooms);

router.get("/:id", getRoom);

module.exports = router;