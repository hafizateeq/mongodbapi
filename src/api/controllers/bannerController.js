const asyncHandler = require("express-async-handler");
const Banner = require("../models/bannerModel");

// @desc    Get Banner
// @route   GET /api/banner
const getBanner = asyncHandler(async (req, res) => {
  const banner = await Banner.find();
  res.status(200).json(banner);
});

// @desc    Post Banner
// @route   POST /api/banner
const createBanner = asyncHandler(async (req, res) => {
  try {
    const bannerData = await Banner.create({
      bannerImg: req.body.bannerImg,
      url: req.body.url,
      title: req.body.title,
      desc: req.body.desc,
    });
    res.status(200).json(bannerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// @desc    Update Banner
// @route   PUT /api/banner/update/:id
const updateBanner = asyncHandler(async (req, res) => {
  const bannerId = await Banner.findById(req.params.id);

  if (!bannerId) {
    res.status(404);
    throw new Error("id not found");
  }
  try {
    const updateBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({status: true, message: "Updated successfully"});
  } catch (err) {
    res.status(400).json(err);
  }
});

// @desc    Delete Banner
// @route   DELETE /api/banner/delete/:id
const deleteBanner = asyncHandler(async (req, res) => {
  const bannerId = await Banner.findById(req.params.id);

  if (!bannerId) {
    res.status(404);
    throw new Error("id not found");
  }

  try {
    await Banner.remove();
    res.status(200).json({ status: true, message: "deleted successfully"});
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = {
  getBanner,
  createBanner,
  updateBanner,
  deleteBanner,
};
