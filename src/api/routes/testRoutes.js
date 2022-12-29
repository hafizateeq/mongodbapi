const express = require("express");
const router = express.Router();

const {
  getTest,
  createTest,
} = require("../controllers/testController");

router.get("/", getTest);
router.post("/", createTest);

module.exports = router;
