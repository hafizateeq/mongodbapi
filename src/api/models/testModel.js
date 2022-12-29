const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    location: {
      type: String,
      required: [true, "Please add date of birth"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    mobile: {
      type: Number,
      required: [true, "Please enter mobile no"],
    },
    jobTitle: {
      type: String,
      required: [true, "Please enter email"],
    },
    reportingTo: {
      type: String,
      required: [true, "Please enter email"],
    },
    empNo: {
      type: String,
      required: [true, "Please enter email"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Test", testSchema);
