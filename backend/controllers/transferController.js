const pool = require("../db");

exports.transferAsset = async (req, res) => {
  const { fromBase, toBase, quantity } = req.body;

  await pool.query(
    "INSERT INTO assets (base, transfer_out) VALUES ($1,$2)",
    [fromBase, quantity]
  );

  await pool.query(
    "INSERT INTO assets (base, transfer_in) VALUES ($1,$2)",
    [toBase, quantity]
  );

  res.send("Transfer Done");
};
