const axios = require("axios");
const axiosApiInstance = axios.create();
// const Swal = require("sweetalert2");
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
      localStorage.clear("token");
      Router.push("/");
      // if (error.response.data.message === "Token is expired") {
      //   localStorage.removeItem("token");
      //   Router.push("/");
      // }
      // if (error.response.data.message === "Token is not active") {
      //   localStorage.removeItem("token");
      //   Router.push("/");
      // }
      // if (error.response.data.message === "Invalid signature") {
      //   localStorage.removeItem("token");
      //   Router.push("/");
      // Swal.fire({
      //   title: "Warning!",
      //   text: "Do not change the token",
      //   icon: "warning",
      //   confirmButtonText: "Ok",
      //   confirmButtonColor: "#6379F4",
      // });
      // }
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
