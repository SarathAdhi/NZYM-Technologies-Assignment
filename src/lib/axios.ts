import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://fakerapi.it",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default axios;
