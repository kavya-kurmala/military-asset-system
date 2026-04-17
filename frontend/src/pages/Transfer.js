import React, { useState } from 'react';
import API from '../services/api';

function Transfer() {
  const [form, setForm] = useState({
    from_base: '',
    to_base: '',
    asset_id: '',
    quantity: ''
  });

  const submit = async () => {
    await API.post('/transfers', form);
    alert("Transfer Added");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Transfers</h2>

      <input placeholder="From Base" onChange={e => setForm({...form, from_base: e.target.value})} />
      <input placeholder="To Base" onChange={e => setForm({...form, to_base: e.target.value})} />
      <input placeholder="Asset ID" onChange={e => setForm({...form, asset_id: e.target.value})} />
      <input placeholder="Quantity" onChange={e => setForm({...form, quantity: e.target.value})} />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Transfer;