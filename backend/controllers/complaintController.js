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


const getComplaintById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // MongoDB integration baad mein add hoga
    res.status(200).json({
      success: true,
      message: "Single complaint API working 🚀",
      complaintId: id,
    });
  } catch (error) {
    next(error);
  }
};


const deleteComplaint = async (req, res, next) => {
  try {
    const { id } = req.params;

    // MongoDB integration baad mein add hoga
    res.status(200).json({
      success: true,
      message: "Complaint delete API working 🚀",
      complaintId: id,
    });
  } catch (error) {
    next(error);
  }
};

const updateComplaintStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const allowedStatus = [
      "reported",
      "assigned",
      "in-progress",
      "resolved",
      "rejected",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid complaint status",
      });
    }

    // MongoDB integration baad mein add hoga
    res.status(200).json({
      success: true,
      message: "Complaint status updated successfully",
      status,
      complaintId: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};


const assignComplaint = async (req, res, next) => {
  try {
    const { officerId } = req.body;

    if (!officerId) {
      return res.status(400).json({
        success: false,
        message: "Officer ID is required",
      });
    }

    // MongoDB integration baad mein add hoga
    res.status(200).json({
      success: true,
      message: "Complaint assigned successfully",
      complaintId: req.params.id,
      officerId,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaintStatus,
  assignComplaint,
  deleteComplaint,
};