const axios = require("axios");
const axiosApiInstance = axios.create();
import Router from "next/router";

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      if (error.response.data.message === "Token is expired") {
        localStorage.clear();
        Router.push("/auth/login");
      }
      if (error.response.data.message === "Token is not active") {
        localStorage.clear();
        Router.push("/auth/login");
      }
      if (error.response.data.message === "Invalid signature") {
        localStorage.clear();
        Router.push("/auth/login");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
