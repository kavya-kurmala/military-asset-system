const pool = require("../db");

module.exports = async (req, res, next) => {
  try {
    await pool.query(
      "INSERT INTO logs (action, details) VALUES ($1,$2)",
      [req.method + " " + req.url, JSON.stringify(req.body)]
    );
  } catch (err) {
    console.log("Logging error:", err.message);
  }
  next();
};
