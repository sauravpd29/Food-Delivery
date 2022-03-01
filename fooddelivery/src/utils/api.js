import axios from "axios";

const token = localStorage.getItem("accessToken");
// Create an instance of axios
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
export default api;
