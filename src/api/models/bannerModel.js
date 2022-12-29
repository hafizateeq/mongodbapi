const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    bannerImg: {
      type: String,
      required: [true, "Please add image"],
    },
    url: {
      type: String,
      required: [true, "Please add Url"],
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
    },
    desc: {
      type: String,
      required: [true, "Please add a description"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Banner", bannerSchema);
