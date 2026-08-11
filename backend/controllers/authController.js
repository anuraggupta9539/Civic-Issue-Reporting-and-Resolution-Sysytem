const registerUser = (req, res) => {
  res.status(201).json({
    success: true,
    message: "User registration API working 🚀",
  });
};

module.exports = {
  registerUser,
};