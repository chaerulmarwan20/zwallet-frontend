import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index(props) {
  const Url = process.env.api;

  const email = props.email;
  const token = props.token;

  const router = useRouter();

  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `${Url}/users/auth/reset-password/?email=${email}&token=${token}`,
        data
      )
      .then((res) => {
        setData({
          password: "",
          confirmPassword: "",
        });
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/auth/login");
          } else {
            router.push("/auth/login");
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

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleToggleConfirm = () => {
    if (typeConfirm === "text") {
      setTypeConfirm("password");
    } else {
      setTypeConfirm("text");
    }
  };

  return (
    <>
      <section className="reset py-5">
        <Container>
          <Row>
            <Col className="col-lg-6 col-xl-7 d-none d-lg-block main">
              <Auth />
            </Col>
            <Col className="col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center d-lg-block aside">
              <h1 className="mt-5 d-none d-lg-block">
                Did You Forgot Your Password? <br /> Don’t Worry, You Can Reset
                Your <br />
                Password In a Minutes.
              </h1>
              <h1 className="zwallet d-lg-none">Zwallet</h1>
              <p className="mt-3 d-none d-lg-block">
                Now you can create a new password for your Zwallet <br />
                account. Type your password twice so we can confirm your <br />
                new passsword.
              </p>
              <p className="mt-3 text-center d-lg-none">
                Create and confirm your new password so <br /> you can login to
                Zwallet.
              </p>
              <form className="mt-5">
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
                    type={type}
                    name="password"
                    className={`${data.password !== "" ? "active" : ""}`}
                    value={data.password}
                    placeholder="Create new password"
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
                <div className="form-group confirm-password">
                  <img
                    src={`${
                      data.confirmPassword !== ""
                        ? "/images/lock-blue.png"
                        : "/images/lock-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Lock"
                    className="confirm-password-img"
                  />
                  <Input
                    type={typeConfirm}
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
                    onClick={handleToggleConfirm}
                  />
                </div>
              </form>
              <Button
                type="button"
                className={`btn btn-reset mt-5 ${
                  data.password !== "" && data.confirmPassword !== ""
                    ? "active"
                    : ""
                }`}
                onClick={handleSubmit}
              >
                Reset Password
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
