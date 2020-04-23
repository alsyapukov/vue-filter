import axios from "axios";

const API = process.env.VUE_APP_API_ADDRESS || 'http://localhost:8080/';
// Common Base Instance
export default axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});
