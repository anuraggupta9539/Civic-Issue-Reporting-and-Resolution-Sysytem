const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const { validateRegister } = require("../middleware/validation");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working 🚀",
  });
});

router.post("/register", validateRegister, registerUser);

router.post("/login", loginUser);

module.exports = router;