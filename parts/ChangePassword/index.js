import { React, useState } from "react";
import axiosApiInstance from "../../helpers/axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;

  const [type, setType] = useState("password");
  const [typeNew, setTypeNew] = useState("password");
  const [typeRepeat, setTypeRepeat] = useState("password");
  const [data, setData] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    const id = localStorage.getItem("id");
    event.preventDefault();
    axiosApiInstance
      .put(`${Url}/users/change-password/${id}`, data)
      .then((res) => {
        setData({
          currentPassword: "",
          password: "",
          confirmPassword: "",
        });
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

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleToggleNew = () => {
    if (typeNew === "text") {
      setTypeNew("password");
    } else {
      setTypeNew("text");
    }
  };

  const handleToggleRepeat = () => {
    if (typeRepeat === "text") {
      setTypeRepeat("password");
    } else {
      setTypeRepeat("text");
    }
  };

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <h1>Change Password</h1>
        <p className="mt-3">
          You must enter your current password and then <br /> type your new
          password twice.
        </p>
        <form>
          <div className="form-group password">
            <img
              src={`${
                data.currentPassword !== ""
                  ? "/images/lock-blue.png"
                  : "/images/lock-grey.png"
              }`}
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input
              type={type}
              name="currentPassword"
              className={`${data.currentPassword !== "" ? "active" : ""}`}
              value={data.currentPassword}
              placeholder="Current password"
              onChange={handleFormChange}
            />
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggle}
            />
          </div>
          <div className="form-group password">
            <img
              src={`${
                data.password !== ""
                  ? "/images/lock-blue.png"
                  : "/images/lock-grey.png"
              }`}
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input
              type={typeNew}
              name="password"
              className={`${data.password !== "" ? "active" : ""}`}
              value={data.password}
              placeholder="New password"
              onChange={handleFormChange}
            />
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggleNew}
            />
          </div>
          <div className="form-group password">
            <img
              src={`${
                data.confirmPassword !== ""
                  ? "/images/lock-blue.png"
                  : "/images/lock-grey.png"
              }`}
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input
              type={typeRepeat}
              name="confirmPassword"
              className={`${data.confirmPassword !== "" ? "active" : ""}`}
              value={data.confirmPassword}
              placeholder="Repeat new password"
              onChange={handleFormChange}
            />
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggleRepeat}
            />
          </div>
          <Button
            type="button"
            className={`btn btn-password mt-5 ${
              data.currentPassword !== "" &&
              data.password !== "" &&
              data.confirmPassword !== ""
                ? "active"
                : ""
            }`}
            onClick={handleSubmit}
          >
            Change Password
          </Button>
        </form>
      </div>
    </Col>
  );
}
