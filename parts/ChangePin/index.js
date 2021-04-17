import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;

  const [showSuccess, setShowSuccess] = useState(false);
  const [data, setData] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleCheck = (event) => {
    const id = localStorage.getItem("id");
    event.preventDefault();
    const number = `${data.one}${data.two}${data.three}${data.four}${data.five}${data.six}`;
    axios
      .post(
        `${Url}/users/pin/check/${id}`,
        { pin: number },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setData({
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
        });
        setShowSuccess(true);
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
  };

  const handleSubmit = (event) => {
    const id = localStorage.getItem("id");
    event.preventDefault();
    const number = `${data.one}${data.two}${data.three}${data.four}${data.five}${data.six}`;
    axios
      .put(
        `${Url}/users/pin/${id}`,
        { pin: number },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setData({
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
        });
        setShowSuccess(false);
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
  };

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <h1>Change PIN</h1>
        {showSuccess === false && (
          <p className="mt-3">
            Enter your current 6 digits Zwallet PIN below to <br /> continue to
            the next steps.
          </p>
        )}
        {showSuccess === true && (
          <p>
            Type your new 6 digits security PIN to use in <br /> Zwallet.
          </p>
        )}
        <form>
          <Row>
            <Col className="col-md-2">
              <Input
                type="text"
                name="one"
                className={`pin ${data.one !== "" ? "active" : ""}`}
                value={data.one}
                onChange={handleFormChange}
                isMax
              />
            </Col>
            <Col className="col-md-2">
              <Input
                type="text"
                name="two"
                className={`pin ${data.two !== "" ? "active" : ""}`}
                value={data.two}
                onChange={handleFormChange}
                isMax
              />
            </Col>
            <Col className="col-md-2">
              <Input
                type="text"
                name="three"
                className={`pin ${data.three !== "" ? "active" : ""}`}
                value={data.three}
                onChange={handleFormChange}
                isMax
              />
            </Col>
            <Col className="col-md-2">
              <Input
                type="text"
                name="four"
                className={`pin ${data.four !== "" ? "active" : ""}`}
                value={data.four}
                onChange={handleFormChange}
                isMax
              />
            </Col>
            <Col className="col-md-2">
              <Input
                type="text"
                name="five"
                className={`pin ${data.five !== "" ? "active" : ""}`}
                value={data.five}
                onChange={handleFormChange}
                isMax
              />
            </Col>
            <Col className="col-md-2">
              <Input
                type="text"
                name="six"
                className={`pin ${data.six !== "" ? "active" : ""}`}
                value={data.six}
                onChange={handleFormChange}
                isMax
              />
            </Col>
          </Row>
          {showSuccess === false && (
            <Button
              type="button"
              className={`btn btn-continue mt-5 ${
                data.one !== "" &&
                data.two !== "" &&
                data.three !== "" &&
                data.four !== "" &&
                data.five !== "" &&
                data.six !== ""
                  ? "active"
                  : ""
              }`}
              onClick={handleCheck}
            >
              Continue
            </Button>
          )}
          {showSuccess === true && (
            <Button
              type="button"
              className={`btn btn-pin mt-5 ${
                data.one !== "" &&
                data.two !== "" &&
                data.three !== "" &&
                data.four !== "" &&
                data.five !== "" &&
                data.six !== ""
                  ? "active"
                  : ""
              }`}
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
