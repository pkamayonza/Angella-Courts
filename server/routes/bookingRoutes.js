const express = require("express");

const authMiddleware =
require("../middleware/auth");

const {
  createBooking,
  getMyBookings
} = require("../controllers/bookingController");

const router = express.Router();

router.post(
  "/room/:roomId",
  authMiddleware,
  createBooking
);

router.get(
  "/my-bookings",
  authMiddleware,
  getMyBookings
);

module.exports = router;