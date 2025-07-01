const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    // Existing fields
    title: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },

    // New fields based on the new form
    age: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    overall_satisfaction: {
      type: String,
      required: true,
    },
    ratings: {
      purchase_process: { type: Number, required: true },
      customer_service: { type: Number, required: true },
      product_quality: { type: Number, required: true },
      product_value: { type: Number, required: true },
      ease_of_use: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema, "feedbacks");
