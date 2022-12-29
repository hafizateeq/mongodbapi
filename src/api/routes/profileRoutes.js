const express = require("express");
const router = express.Router();

const {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
} = require("../controllers/profileController");

router.get("/", getProfile);
router.post("/", createProfile);
router.put("/update/:id", updateProfile);
router.delete("/delete/:id", deleteProfile);

module.exports = router;
