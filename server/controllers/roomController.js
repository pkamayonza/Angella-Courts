const pool = require("../config/db");

// Get all rooms
exports.getRooms = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM rooms ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Get single room
exports.getRoom = async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT * FROM rooms WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.createRoom = async (req, res) => {

    try {

        const {
            room_number,
            room_type,
            price,
            description
        } = req.body;

        const room = await pool.query(
            `
            INSERT INTO rooms
            (
                room_number,
                room_type,
                price,
                description
            )

            VALUES ($1,$2,$3,$4)

            RETURNING *
            `,
            [
                room_number,
                room_type,
                price,
                description
            ]
        );

        res.status(201).json(room.rows[0]);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};