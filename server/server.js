require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Angella Courts API Running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes =
require("./routes/authRoutes");

app.use(
  "/api/auth",
  authRoutes
);

const authMiddleware =
require("./middleware/auth");

const roomRoutes =
require("./routes/roomRoutes");

app.use(
  "/api/rooms",
  roomRoutes
);

app.get(
    "/api/profile",
    authMiddleware,
    (req, res) => {

        res.json({
            message: "Protected route",
            user: req.user
        });

    }
);

const bookingRoutes =
require("./routes/bookingRoutes");

app.use(
  "/api/bookings",
  bookingRoutes
);