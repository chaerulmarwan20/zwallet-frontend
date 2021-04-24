import axios from "axios";
import axiosApiInstance from "../../../helpers/axios";

export const getTransaction = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/${id}?order=DESC`)
      .then((res) => {
        dispatch({
          type: "GET_TRANSACTION",
          payload: res.data.data,
        });
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getIncome = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/income/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_INCOME",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getExpense = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/expense/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_EXPENSE",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const topUp = (idPayment, amount) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    const id = localStorage.getItem("id");
    axiosApiInstance
      .put(`${Url}/transactions/top-up/${id}`, {
        idPayment: idPayment,
        amount: amount,
      })
      .then((res) => {
        resolve(res.data.message);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const createDetail = (id, idUser, amount, balanceLeft, notes) => (
  dispatch
) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    axiosApiInstance
      .post(`${Url}/transactions/details`, {
        idUser: id,
        idReceiver: idUser,
        amount: amount,
        balanceLeft: balanceLeft,
        notes: notes,
      })
      .then((res) => {
        const id = res.data.data[0].id;
        const message = res.data.message;
        resolve({ id, message });
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getDetail = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    axiosApiInstance
      .get(`${Url}/transactions/details/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_DETAIL",
          payload: res.data.data[0],
        });
        resolve(res.data.data[0]);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const checkPin = (pin) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    const id = localStorage.getItem("id");
    axiosApiInstance
      .post(`${Url}/users/pin/check/${id}`, { pin: pin })
      .then((res) => {
        resolve(res.data.message);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const createTransaction = (idUser, idReceiver, amount, notes) => (
  dispatch
) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    axiosApiInstance
      .post(`${Url}/transactions/`, {
        idUser: idUser,
        idReceiver: idReceiver,
        amount: amount,
        notes: notes,
      })
      .then((res) => {
        resolve(res.data.message);
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};

export const getHistory = (order, sort, page, limit) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const Url = process.env.api;
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(
        `${Url}/transactions/${id}?order=${order}&sortBy=${sort}&page=${page}&perPage=${limit}`
      )
      .then((res) => {
        dispatch({
          type: "GET_HISTORY",
          payload: res.data.data,
        });
        const currentPage = res.data.currentPage;
        const totalPage = res.data.totalPage;
        resolve({ currentPage, totalPage });
      })
      .catch((err) => {
        reject(new Error(err.response.data.message));
      });
  });
};
