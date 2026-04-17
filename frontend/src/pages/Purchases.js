import React, { useState } from "react";
import axios from "axios";

function Purchases() {
  const [form, setForm] = useState({
    base: "",
    equipment_type: "",
    quantity: 0
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/purchases", form);
    alert("Added!");
  };

  return (
    <div>
      <h2>Purchases</h2>
      <input placeholder="Base" onChange={e => setForm({...form, base: e.target.value})}/>
      <input placeholder="Equipment" onChange={e => setForm({...form, equipment_type: e.target.value})}/>
      <input type="number" onChange={e => setForm({...form, quantity: e.target.value})}/>
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default Purchases;
