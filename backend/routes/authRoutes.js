const express = require("express");
const { registerUser } = require("../controllers/authController");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working 🚀",
  });
});

router.post("/register", registerUser);

module.exports = router;