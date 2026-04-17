const pool = require("../db");

exports.addPurchase = async (req, res) => {
  const { base, equipment_type, quantity } = req.body;

  await pool.query(
    "INSERT INTO assets (base, equipment_type, purchases) VALUES ($1,$2,$3)",
    [base, equipment_type, quantity]
  );

  res.send("Purchase Added");
};
