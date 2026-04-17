import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    API.get("/dashboard").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Opening: {data.openingBalance}</p>
      <p>Closing: {data.closingBalance}</p>

      <p onClick={() => setShow(true)}>
        Net Movement: {data.netMovement}
      </p>

      <p>Assigned: {data.assigned}</p>
      <p>Expended: {data.expended}</p>

      {show && (
        <div>
          <h3>Details</h3>
          <p>Purchases: {data.purchases}</p>
          <p>Transfer In: {data.transferIn}</p>
          <p>Transfer Out: {data.transferOut}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
