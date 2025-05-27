const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./database/connectDB");


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes


// Port and Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

