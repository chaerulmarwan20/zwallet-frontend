import { React, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index(props) {
  const Url = process.env.api;

  const router = useRouter();

  const email = props.email;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const number = `${data.one}${data.two}${data.three}${data.four}${data.five}${data.six}`;
    axios
      .post(`${Url}/users/pin/${email}`, { pin: number })
      .then((res) => {
        setData({
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
        });
        router.push("/auth/success");
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
      <section className="pin py-5">
        <Container>
          <Row>
            <Col className="col-lg-6 col-xl-7 d-none d-lg-block main">
              <Auth />
            </Col>
            <Col className="col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center d-lg-block aside">
              <h1 className="mt-5 d-none d-lg-block">
                Secure Your Account, Your Wallet, <br /> and Your Data With 6
                Digits PIN <br /> That You Created Yourself.
              </h1>
              <h1 className="zwallet d-lg-none">Zwallet</h1>
              <p className="mt-3 d-none d-lg-block">
                Create 6 digits pin to secure all your money and your data in
                <br />
                Zwallet app. Keep it secret and don’t tell anyone about your
                <br />
                Zwallet account password and the PIN.
              </p>
              <p className="mt-3 text-center d-lg-none">
                Create a PIN that’s contain 6 digits number for <br /> security
                purpose in Zwallet.
              </p>
              <form className="mt-5">
                <Row>
                  <Col className="col-2 col-md-2">
                    <Input
                      type="text"
                      name="one"
                      className={`${data.one !== "" ? "active" : ""}`}
                      value={data.one}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-2 col-md-2">
                    <Input
                      type="text"
                      name="two"
                      className={`${data.two !== "" ? "active" : ""}`}
                      value={data.two}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-2 col-md-2">
                    <Input
                      type="text"
                      name="three"
                      className={`${data.three !== "" ? "active" : ""}`}
                      value={data.three}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-2 col-md-2">
                    <Input
                      type="text"
                      name="four"
                      className={`${data.four !== "" ? "active" : ""}`}
                      value={data.four}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-2 col-md-2">
                    <Input
                      type="text"
                      name="five"
                      className={`${data.five !== "" ? "active" : ""}`}
                      value={data.five}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-2 col-md-2">
                    <Input
                      type="text"
                      name="six"
                      className={`${data.six !== "" ? "active" : ""}`}
                      value={data.six}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                </Row>
              </form>
              <div className="d-flex justify-content-center">
                <Button
                  type="button"
                  className={`btn btn-confirm ${
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
                  Confirm
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
