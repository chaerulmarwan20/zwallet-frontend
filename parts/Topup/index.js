import { React, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import PinInput from "react-pin-input";
import Swal from "sweetalert2";
import { checkPin, topUp } from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index({ payment }) {
  const dispatch = useDispatch();

  const [idPayment, setIdPayment] = useState(null);
  const [amount, setAmount] = useState(null);
  const [data, setData] = useState({
    value: "",
  });
  const [status, setStatus] = useState(false);

  const handleFormChange = (value) => {
    setData({ value });
  };

  const handleComplete = () => {
    setStatus(true);
  };

  const handleClickPayment = (params) => {
    setIdPayment(params);
  };

  const handleClickAmount = (params) => {
    setAmount(params);
  };

  let onClear = useRef(null);
  let onClean = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pin = data.value;
    onClear.clear();
    onClean.clear();
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
      dispatch(checkPin(pin))
        .then((res) => {
          dispatch(topUp(idPayment, amount))
            .then((res) => {
              Swal.fire({
                title: "Success!",
                text: res,
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#6379F4",
              });
            })
            .catch((err) => {
              Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#6379F4",
              });
            });
        })
        .catch((err) => {
          setData({
            value: "",
          });
          setStatus(false);
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        });
    }
  };

  return (
    <>
      <Col className="col-lg-8 col-xl-9">
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
            <Button type="button" className="btn btn-process" isModal>
              Top Up Now
            </Button>
          </div>
        </div>
      </Col>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter PIN to Top Up your balance
              </h5>
              <Button type="button" className="close" isDismiss>
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body">
              <p>
                Enter your 6 digits PIN for confirmation to
                <br className="d-none d-md-block" /> continue top up your
                balance.
              </p>
              <form className="mt-5">
                <Row>
                  <Col className="col d-none d-md-block input-pin">
                    <PinInput
                      length={6}
                      focus
                      secret
                      type="numeric"
                      onChange={handleFormChange}
                      ref={(p) => (onClear = p)}
                      inputStyle={{
                        fontWeight: 700,
                        fontSize: "30px",
                        lineHeight: "41px",
                        textAlign: "center",
                        paddingBottom: "0px",
                        width: "53px",
                        height: "65px",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                        border: status
                          ? "1.5px solid #6379f4"
                          : "1px solid rgba(169, 169, 169, 0.6)",
                        boxSizing: "border-box",
                        boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
                        color: "#3a3d42",
                        marginRight: "17px",
                      }}
                      inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                      onComplete={() => handleComplete()}
                    />
                  </Col>
                  <Col className="col d-md-none d-flex justify-content-center input-pin">
                    <PinInput
                      length={6}
                      focus
                      secret
                      type="numeric"
                      onChange={handleFormChange}
                      ref={(p) => (onClean = p)}
                      inputStyle={{
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "31px",
                        textAlign: "center",
                        paddingBottom: "0px",
                        width: "40px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                        border: status
                          ? "1.5px solid #6379f4"
                          : "1px solid rgba(169, 169, 169, 0.6)",
                        boxSizing: "border-box",
                        boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
                        color: "#3a3d42",
                        marginRight: "6px",
                      }}
                      inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                      onComplete={() => handleComplete()}
                    />
                  </Col>
                </Row>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center justify-content-md-end">
              <Button
                type="button"
                className={`btn btn-continue ${status ? "active" : ""}`}
                onClick={handleSubmit}
                isDismiss
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
