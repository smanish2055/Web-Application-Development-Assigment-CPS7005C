const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutesV1");

dbConnect();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
// start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
