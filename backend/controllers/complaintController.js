const createComplaint = async (req, res, next) => {
  try {
    const { title, description, category, location } = req.body;

    if (!title || !description || !category || !location) {
      return res.status(400).json({
        success: false,
        message: "Title, description, category and location are required",
      });
    }

    // MongoDB integration baad mein add hoga
    res.status(201).json({
      success: true,
      message: "Complaint data received successfully",
      complaint: {
        title,
        description,
        category,
        location,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getComplaints = async (req, res, next) => {
  try {
    // MongoDB integration baad mein add hoga
    res.status(200).json({
      success: true,
      message: "Complaint list API working 🚀",
      complaints: [],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createComplaint,
  getComplaints,
};