import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [role, setRole] = useState("admin");
  const [base, setBase] = useState("base1");
  const [time, setTime] = useState("");


  useEffect(() => {
    axios.get("https://military-asset-system-jfh9.onrender.com/api/dashboard", {
  headers: { role, base }
})

    .then(res => {
  setData(res.data);
  setTime(new Date().toLocaleTimeString());
})

    .catch(err => console.log(err));
  }, [role, base]);

  if (!data) return <h2 style={{textAlign:"center"}}>Loading...</h2>;

  const cardStyle = {
    flex: 1,
    padding: "20px",
    borderRadius: "15px",
    color: "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "0.3s",
    cursor: "pointer"
  };

  return (
    <div style={{fontFamily:"Arial", background:"#0f172a", minHeight:"100vh", padding:"20px"}}>

      {/* HEADER */}
      <h1 style={{color:"white", textAlign:"center", marginBottom:"30px"}}>
        Military Asset Dashboard
      </h1>
      
<div style={{textAlign:"center", marginBottom:"20px"}}>
  <select onChange={(e)=>setRole(e.target.value)} style={{marginRight:"10px"}}>
    <option value="admin">Admin</option>
    <option value="commander">Commander</option>
    <option value="logistics">Logistics</option>
  </select>

  <select onChange={(e)=>setBase(e.target.value)}>
    <option value="base1">Base 1</option>
    <option value="base2">Base 2</option>
  </select>
</div>
<p style={{color:"gray", textAlign:"center"}}>
  Last updated: {time}
</p>




      {/* CARDS ROW 1 */}
      <div style={{display:"flex", gap:"20px", marginBottom:"20px"}}>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#3b82f6,#1e3a8a)"}}>
          <h3>Closing Balance</h3>
          <h2>{data.closingBalance}</h2>
        </div>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#10b981,#065f46)"}}>
          <h3>Net Movement</h3>
          <h2>{data.netMovement}</h2>
        </div>

      </div>

      {/* CARDS ROW 2 */}
      <div style={{display:"flex", gap:"20px", marginBottom:"20px"}}>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#f59e0b,#92400e)"}}>
          <h3>Purchases</h3>
          <h2>{data.purchases}</h2>
        </div>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#8b5cf6,#4c1d95)"}}>
          <h3>Transfer In</h3>
          <h2>{data.transferIn}</h2>
        </div>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#ef4444,#7f1d1d)"}}>
          <h3>Transfer Out</h3>
          <h2>{data.transferOut}</h2>
        </div>

      </div>

      {/* CARDS ROW 3 */}
      <div style={{display:"flex", gap:"20px"}}>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#06b6d4,#164e63)"}}>
          <h3>Assigned</h3>
          <h2>{data.assigned}</h2>
        </div>

        <div style={{...cardStyle, background:"linear-gradient(135deg,#f43f5e,#881337)"}}>
          <h3>Expended</h3>
          <h2>{data.expended}</h2>
        </div>

      </div>
        <div style={{textAlign:"center", marginTop:"20px"}}>
  <button
    onClick={() => window.location.reload()}
    style={{
      padding:"10px 20px",
      borderRadius:"10px",
      border:"none",
      background:"#22c55e",
      color:"white",
      cursor:"pointer"
    }}
  >
    Refresh Data
  </button>
</div>

    </div>
  );


}

export default App;
