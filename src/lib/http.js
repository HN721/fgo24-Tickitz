import axios from "axios";

function http(token) {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  const instance = axios.create({
    headers,
    baseURL: "http://146.190.102.54:9203",
  });
  return instance;
}

export default http;
