const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // MongoDB integration baad mein add hoga
    res.status(201).json({
      success: true,
      message: "Registration data validated successfully",
      user: {
        name,
        email,
        password: hashedPassword,
        role: "citizen",
      },
    });
  } catch (error) {
    next(error);
  }
};


const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // MongoDB integration baad mein add hoga
    // User database se find karke password compare karenge

    res.status(200).json({
      success: true,
      message: "Login API structure working 🚀",
      email,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  registerUser,
  loginUser,
};