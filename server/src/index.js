const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutesV1");

dbConnect();

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
