import { React, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const router = useRouter();

  const [type, setType] = useState("password");
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleClick = () => {
    router.push("/");
  };

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${Url}/users/auth/login`, data)
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("id", res.data.data.id);
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/dashboard");
          } else {
            router.push("/dashboard");
          }
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
      <section className="login py-5">
        <Container>
          <Row>
            <Col className="col-lg-6 col-xl-7 d-none d-lg-block main">
              <Auth />
            </Col>
            <Col className="col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center d-lg-block aside">
              <h1 className="mt-5 d-none d-lg-block">
                Start Accessing Banking Needs <br /> With All Devices and All
                Platforms <br />
                With 30.000+ Users
              </h1>
              <h1 className="zwallet d-lg-none" onClick={() => handleClick()}>
                Zwallet
              </h1>
              <h1 className="mt-5 d-lg-none">Login</h1>
              <p className="mt-3 d-none d-lg-block">
                Transfering money is eassier than ever, you can access <br />
                Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
                we cover all of that for you!
              </p>
              <p className="mt-3 text-center d-lg-none">
                Login to your existing account to access <br /> all the features
                in Zwallet.
              </p>
              <form className="mt-5">
                <div className="form-group mail">
                  <img
                    src={`/images/${
                      data.email !== "" ? "mail-blue.png" : "mail-grey.png"
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
                <div className="form-group password">
                  <img
                    src={`/images/${
                      data.password !== "" ? "lock-blue.png" : "lock-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <Input
                    type={type}
                    name="password"
                    className={`${data.password !== "" ? "active" : ""}`}
                    value={data.password}
                    placeholder="Enter your password"
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
              </form>
              <Link href="/auth/reset">
                <a className="forgot float-right mt-2">Forgot password?</a>
              </Link>
              <br />
              {showError === true && (
                <p className="error text-center mt-4">
                  Email or Password Invalid
                </p>
              )}
              <Button
                type="button"
                className={`btn btn-login ${
                  data.email !== "" && data.password !== "" ? "active" : ""
                } ${showError === true ? "mt-3" : "mt-5"}`}
                onClick={handleSubmit}
              >
                Login
              </Button>
              <p className="text-center mt-5 account">
                Don’t have an account? Let’s{" "}
                <Link href="/auth/signup">
                  <a>Sign Up</a>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
