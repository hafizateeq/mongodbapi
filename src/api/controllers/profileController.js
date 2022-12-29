const asyncHandler = require("express-async-handler");
const Profile = require("../models/profileModel");

// @desc    Get Profile
// @route   GET /api/profile
const getProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.find();
  res.status(200).json(profile);
});

// @desc    Post Profile
// @route   POST /api/profile
const createProfile = asyncHandler(async (req, res) => {
  try {
    const profileData = await Profile.create({
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      email: req.body.email,
      mobile: req.body.mobile,
    });
    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// @desc    Update Profile
// @route   PUT /api/profile/update/:id
const updateProfile = asyncHandler(async (req, res) => {
  const profileId = await Profile.findById(req.params.id);

  if (!profileId) {
    res.status(404);
    throw new Error("id not found");
  }
  try {
    const updateProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ status: true, message: "Profile updated successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// @desc    Delete Profile
// @route   DELETE /api/profile/delete/:id
const deleteProfile = asyncHandler(async (req, res) => {
  const profileId = await Profile.findById(req.params.id);

  if (!profileId) {
    res.status(404);
    throw new Error("id not found");
  }

  try {
    await Profile.remove();
    res
      .status(200)
      .json({ status: true, message: "Profile deleted successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
