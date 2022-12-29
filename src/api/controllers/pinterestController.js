const asyncHandler = require("express-async-handler");
const pinterestModel = require("../models/pinterestModel");

// @desc    Get pin
// @route   GET /api/pin
const getPin = asyncHandler(async (req, res) => {
  const pin = await pinterestModel.find();
  res.status(200).json(pin);
});

// @desc    Get pin by id
// @route   GET /api/pin
const getPinById = asyncHandler(async (req, res) => {
  const pinId = await pinterestModel.findById(req.params.id);
  if (!pinId) {
    res.status(404);
    throw new Error("id not found");
  }
  res.status(200).json(pinId);
});

// @desc    Post pin
// @route   POST /api/pin
const createPin = asyncHandler(async (req, res) => {
  try {
    const pinData = await pinterestModel.create({
      category: req.body.category,
      height: req.body.height,
      webName: req.body.webName,
      webLink: req.body.webLink,
      title: req.body.title,
      profileImg: req.body.profileImg,
      pinImg: req.body.pinImg,
      profileName: req.body.profileName
    });
    res.status(200).json(pinData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = {
  getPin,
  getPinById,
  createPin,
};
