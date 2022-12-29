const express = require("express");
const router = express.Router();

const {
  getPin,
  getPinById,
  createPin,
} = require("../controllers/pinterestController");

router.get("/", getPin);
router.post("/", createPin);
router.get("/:id", getPinById);

module.exports = router;
