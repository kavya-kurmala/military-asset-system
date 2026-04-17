const pool = require("../db");

exports.assignAsset = async (req, res) => {
  const { base, quantity } = req.body;

  await pool.query(
    "INSERT INTO assets (base, assigned) VALUES ($1,$2)",
    [base, quantity]
  );

  res.send("Assigned");
};
