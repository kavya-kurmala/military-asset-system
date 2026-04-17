const express = require("express");
const router = express.Router();
const { transferAsset } = require("../controllers/transferController");

router.post("/", transferAsset);

module.exports = router;
