import axios from "axios";

const api = axios.create({
  baseURL: "http://52.87.155.75/links",
});

export default api;