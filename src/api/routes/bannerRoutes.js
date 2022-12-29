const express = require("express");
const router = express.Router();

const {
  getBanner,
  createBanner,
  updateBanner,
  deleteBanner
} = require("../controllers/bannerController");

router.get("/", getBanner);
router.post("/", createBanner);
router.put("/update/:id", updateBanner);
router.delete("/delete/:id", deleteBanner);

module.exports = router;
