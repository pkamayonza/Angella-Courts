const pool = require("../config/db");

exports.createBooking = async (req, res) => {
  try {

    const roomId = req.params.roomId;
    const userId = req.user.id;

    // Check room exists
    const room = await pool.query(
      "SELECT * FROM rooms WHERE id = $1",
      [roomId]
    );

    if (room.rows.length === 0) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    // Check availability
    if (room.rows[0].status !== "available") {
      return res.status(400).json({
        message: "Room unavailable"
      });
    }

    // Create booking
    const booking = await pool.query(
      `INSERT INTO bookings
      (user_id, room_id)
      VALUES ($1, $2)
      RETURNING *`,
      [userId, roomId]
    );

    res.status(201).json({
      message: "Booking submitted",
      booking: booking.rows[0]
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};

exports.getMyBookings = async (req, res) => {

  try {

    const bookings = await pool.query(
      `
      SELECT
      bookings.id,
      bookings.status,
      bookings.booking_date,
      rooms.room_number,
      rooms.room_type,
      rooms.price

      FROM bookings

      JOIN rooms
      ON bookings.room_id = rooms.id

      WHERE bookings.user_id = $1

      ORDER BY bookings.booking_date DESC
      `,
      [req.user.id]
    );

    res.json(bookings.rows);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};