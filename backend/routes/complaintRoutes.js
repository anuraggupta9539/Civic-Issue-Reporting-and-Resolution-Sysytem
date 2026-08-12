const express = require("express");

const {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaintStatus,
  assignComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

// Create complaint
router.post("/", createComplaint);

// Get all complaints
router.get("/", getComplaints);

// Get single complaint
router.get("/:id", getComplaintById);

// Update complaint status
router.patch("/:id/status", updateComplaintStatus);

// Assign complaint to officer
router.patch("/:id/assign", assignComplaint);

// Delete complaint
router.delete("/:id", deleteComplaint);

module.exports = router;