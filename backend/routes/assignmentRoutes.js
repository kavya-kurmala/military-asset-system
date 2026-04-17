const express = require("express");
const router = express.Router();
const { assignAsset } = require("../controllers/assignmentController");

router.post("/", assignAsset);

module.exports = router;
