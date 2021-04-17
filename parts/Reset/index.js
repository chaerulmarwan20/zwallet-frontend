import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;

  const [data, setData] = useState({
    email: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${Url}/users/auth/forgot-password`, { email: data.email })
      .then((res) => {
        setData({
          email: "",
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

  return (
    <>
      <section className="reset py-5">
        <Container>
          <Row>
            <Col className="col-md-7 main">
              <Auth />
            </Col>
            <Col className="col-md-5 aside">
              <h1 className="mt-5">
                Did You Forgot Your Password? <br /> Don’t Worry, You Can Reset
                Your <br />
                Password In a Minutes.
              </h1>
              <p className="mt-3">
                To reset your password, you must type your e-mail and we <br />
                will send a link to your email and you will be directed to the
                <br /> reset password screens.
              </p>
              <form className="mt-5">
                <div className="form-group mail">
                  <img
                    src={`${
                      data.email !== ""
                        ? "/images/mail-blue.png"
                        : "/images/mail-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Mail"
                    className="mail-img"
                  />
                  <Input
                    type="text"
                    name="email"
                    className={`${data.email !== "" ? "active" : ""}`}
                    value={data.email}
                    placeholder="Enter your e-mail"
                    onChange={handleFormChange}
                  />
                </div>
              </form>
              <Button
                type="button"
                className={`btn btn-confirm mt-5 ${
                  data.email !== "" ? "active" : ""
                }`}
                onClick={handleSubmit}
              >
                Confirm
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
