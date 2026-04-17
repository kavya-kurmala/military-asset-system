import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});
axios.get("http://localhost:5000/api/dashboard", {
  headers: {
    role: "commander",
    base: "base1"
  }
})
.then(res => setData(res.data));


export default API;
