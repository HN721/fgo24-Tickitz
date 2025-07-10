import axios from "axios";

function http(token) {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  const instance = axios.create({
    headers,
    baseURL: "http://localhost:8888",
  });
  return instance;
}

export default http;
