const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Routes
const authRoutes = require("./routes/authRoutes");

// Error Handler
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;

// ====================
// Middlewares
// ====================

app.use(cors());
app.use(express.json());

// ====================
// Health Check
// ====================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Civic Issue Reporting API is running 🚀",
  });
});

// ====================
// Routes
// ====================

app.use("/api/auth", authRoutes);

// ====================
// 404 Handler
// ====================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ====================
// Error Handler
// ====================

app.use(errorHandler);

// ====================
// Start Server
// ====================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});