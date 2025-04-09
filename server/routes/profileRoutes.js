const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleWare.js");
const {
  getCurrentProfile,
  getOrCreateUserProfile,
} = require("../controllers/profileControllers.js");

router.get("/", authMiddleware, getCurrentProfile);
router.post("/", authMiddleware, getOrCreateUserProfile);

module.exports = router;
