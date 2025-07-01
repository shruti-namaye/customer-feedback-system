const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST route to handle feedback submission
router.post("/", async (req, res) => {
  try {
    const {
      title,
      email,
      message,
      age,
      source,
      overall_satisfaction,
      purchase_process,
      customer_service,
      product_quality,
      product_value,
      ease_of_use,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !email ||
      !message ||
      !age ||
      !source ||
      !overall_satisfaction ||
      !purchase_process ||
      !customer_service ||
      !product_quality ||
      !product_value ||
      !ease_of_use
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save feedback
    const feedback = new Feedback({
      title,
      email,
      message,
      age,
      source,
      overall_satisfaction,
      ratings: {
        purchase_process,
        customer_service,
        product_quality,
        product_value,
        ease_of_use,
      },
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET route to fetch all feedbacks
router.get("/", async (req, res) => {
  try {
    const allFeedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(allFeedback);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
});

module.exports = router;
