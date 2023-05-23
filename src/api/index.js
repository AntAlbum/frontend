import axios from "axios";

function apiInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

function photoInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-Type": "multipart/form-data; boundary=ebf9f03029db4c2799ae16b5428b06bd",
    },
  });
  return instance;
}

export { apiInstance, photoInstance };
