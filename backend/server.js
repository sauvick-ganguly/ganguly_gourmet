const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const reservationRoutes = require("./routes/reservationRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/reservations", reservationRoutes);

app.get("/", (req, res) => {
    res.send("Ganguly Gourmet Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
console.log(process.env.MONGO_URI);