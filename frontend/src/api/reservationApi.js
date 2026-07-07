import axios from "axios";

const API = axios.create({
  baseURL: "https://ganguly-gourmet-backend.onrender.com",
});

export default API;