const express = require("express");

const {
  getRooms,
  getRoom
} = require("../controllers/roomController");

const router = express.Router();

router.get("/", getRooms);

router.get("/:id", getRoom);

module.exports = router;

const authMiddleware =
require("../middleware/auth");

const adminMiddleware =
require("../middleware/admin");

const {
    getRooms,
    getRoom,
    createRoom
} = require("../controllers/roomController");

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    createRoom
);