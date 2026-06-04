const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users
      (fullname,email,password)
      VALUES($1,$2,$3)
      RETURNING id,fullname,email`,
      [fullname, email, hashedPassword]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.json({
      token,
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};