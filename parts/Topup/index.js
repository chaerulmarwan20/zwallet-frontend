import { React, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";
import Rupiah from "../../helpers/rupiah";

export default function index({ payment }) {
  const Url = process.env.api;

  const [idPayment, setIdPayment] = useState(null);
  const [amount, setAmount] = useState(null);

  const handleClickPayment = (params) => {
    setIdPayment(params);
  };

  const handleClickAmount = (params) => {
    setAmount(params);
  };

  const handleClickProcess = () => {
    if (idPayment === null || amount === null) {
      Swal.fire({
        title: "Error!",
        text: "Please choose amount & payment method",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379F4",
      });
    } else {
      setIdPayment(null);
      setAmount(null);
      const id = localStorage.getItem("id");
      const token = localStorage.getItem("token");
      axios
        .put(
          `${Url}/transactions/top-up/${id}`,
          {
            idPayment: idPayment,
            amount: amount,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        });
    }
  };

  return (
    <Col className="col-md-9">
      <div className="step-top-up p-5">
        <h1>Top Up</h1>
        <div
          className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center"
          onClick={() => handleClickAmount(50000)}
        >
          <p className={`${amount === 50000 ? "active" : ""}`}>
            <span>1</span>
            {Rupiah(50000)}
          </p>
        </div>
        <div
          className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center"
          onClick={() => handleClickAmount(100000)}
        >
          <p className={`${amount === 100000 ? "active" : ""}`}>
            <span>2</span>
            {Rupiah(100000)}
          </p>
        </div>
        <div
          className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center"
          onClick={() => handleClickAmount(250000)}
        >
          <p className={`${amount === 250000 ? "active" : ""}`}>
            <span>3</span>
            {Rupiah(250000)}
          </p>
        </div>
        <div
          className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center"
          onClick={() => handleClickAmount(500000)}
        >
          <p className={`${amount === 500000 ? "active" : ""}`}>
            <span>4</span>
            {Rupiah(500000)}
          </p>
        </div>
        <div
          className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center"
          onClick={() => handleClickAmount(1000000)}
        >
          <p className={`${amount === 1000000 ? "active" : ""}`}>
            <span>5</span>
            {Rupiah(1000000)}
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-4">
          {payment.map((item, index) => {
            return (
              <Button
                type="button"
                className={`btn btn-payment ${
                  idPayment === item.id ? "active" : ""
                }`}
                key={index}
                onClick={() => handleClickPayment(item.id)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button
            type="button"
            className="btn btn-process"
            onClick={() => handleClickProcess()}
          >
            Process
          </Button>
        </div>
      </div>
    </Col>
  );
}
