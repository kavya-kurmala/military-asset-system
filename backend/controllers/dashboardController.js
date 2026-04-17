const pool = require("../db");

exports.getDashboard = async (req, res) => {
  try {
    const { role, base } = req.user;
    const { equipmentType } = req.query;

    let query = "SELECT * FROM assets WHERE 1=1";
    let values = [];
    let index = 1;

    if (role !== "admin") {
      query += ` AND base = $${index++}`;
      values.push(base);
    }

    if (equipmentType) {
      query += ` AND equipment_type = $${index++}`;
      values.push(equipmentType);
    }

    const result = await pool.query(query, values);

    let purchases = 0, transferIn = 0, transferOut = 0, assigned = 0, expended = 0;

    result.rows.forEach(r => {
      purchases += r.purchases;
      transferIn += r.transfer_in;
      transferOut += r.transfer_out;
      assigned += r.assigned;
      expended += r.expended;
    });

    res.json({
      openingBalance: 0,
      closingBalance: purchases + transferIn - transferOut,
      netMovement: purchases + transferIn - transferOut,
      purchases,
      transferIn,
      transferOut,
      assigned,
      expended
    });

  } catch (err) {
    console.error(err);
  }
};
