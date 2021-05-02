import { React, useState, useRef } from "react";
import PinInput from "react-pin-input";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { checkPin, updatePin } from "../../configs/redux/actions/user";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const dispatch = useDispatch();

  const [showSuccess, setShowSuccess] = useState(false);
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

  let onClear = useRef(null);
  let onClean = useRef(null);

  const handleCheck = (event) => {
    event.preventDefault();
    onClear.clear();
    onClean.clear();
    const pin = data.value;
    dispatch(checkPin(pin))
      .then((res) => {
        setData({
          value: "",
        });
        setStatus(false);
        setShowSuccess(true);
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClear.clear();
    onClean.clear();
    const pin = data.value;
    dispatch(updatePin(pin))
      .then((res) => {
        setData({
          value: "",
        });
        setStatus(false);
        setShowSuccess(false);
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
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
  };

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="details p-5">
        <h1>Change PIN</h1>
        {showSuccess === false && (
          <p className="mt-3">
            Enter your current 6 digits Zwallet PIN below to
            <br className="d-none d-md-block" /> continue to the next steps.
          </p>
        )}
        {showSuccess === true && (
          <p>
            Type your new 6 digits security PIN to use in
            <br className="d-none d-md-block" /> Zwallet.
          </p>
        )}
        <form>
          <Row>
            <Col className="col d-none d-md-block pr-0 pl-3 input-pin">
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
            <Col className="col d-md-none input-pin">
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
                  width: "35px",
                  height: "45px",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  border: status
                    ? "1.5px solid #6379f4"
                    : "1px solid rgba(169, 169, 169, 0.6)",
                  boxSizing: "border-box",
                  boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
                  color: "#3a3d42",
                  marginRight: "4px",
                }}
                inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                onComplete={() => handleComplete()}
              />
            </Col>
          </Row>
          {showSuccess === false && (
            <Button
              type="button"
              className={`btn btn-continue mt-5 ${status ? "active" : ""}`}
              onClick={handleCheck}
            >
              Continue
            </Button>
          )}
          {showSuccess === true && (
            <Button
              type="button"
              className={`btn btn-pin mt-5 ${status ? "active" : ""}`}
              onClick={handleSubmit}
            >
              Change PIN
            </Button>
          )}
        </form>
      </div>
    </Col>
  );
}
