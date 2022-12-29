const mongoose = require("mongoose");

const pinterestSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    height: {
      type: String,
    },
    webName: {
      type: String,
    },
    webLink: {
      type: String,
    },
    title: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    pinImg: {
      type: String,
    },
    profileName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pinterest", pinterestSchema);
