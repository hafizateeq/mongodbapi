const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    dob: {
      type: String,
      required: [true, "Please add date of birth"],
    },
    gender: {
      type: String,
      required: [true, "Please select gender"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    mobile: {
      type: Number,
      required: [true, "Please enter mobile no"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
