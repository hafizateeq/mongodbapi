const asyncHandler = require("express-async-handler");
const Test = require("../models/testModel");

// @desc    Get test
// @route   GET /api/test
const getTest = asyncHandler(async (req, res) => {
  const test = await Test.find();
  res.status(200).json(test);
});

// @desc    Post test
// @route   POST /api/test
const createTest = asyncHandler(async (req, res) => {
  try {
    const TestData = await Test.create({
      name: req.body.name,
      location: req.body.location,
      email: req.body.email,
      mobile: req.body.mobile,
      jobTitle: req.body.jobTitle,
      reportingTo: req.body.reportingTo,
      empNo: req.body.empNo,
    });
    res.status(200).json(TestData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = {
  getTest,
  createTest,
};
