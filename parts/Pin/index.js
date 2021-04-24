import { React, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import PinInput from "react-pin-input";
import Swal from "sweetalert2";
import { creatPin } from "../../actions";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index(props) {
  const router = useRouter();

  const dispatch = useDispatch();

  const email = props.email;

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

  const handleClick = () => {
    router.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pin = data.value;
    onClear.clear();
    dispatch(creatPin(email, pin))
      .then((res) => {
        setData({
          value: "",
        });
        setStatus(false);
        router.push("/auth/success");
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
              <h1 className="zwallet d-lg-none" onClick={() => handleClick()}>
                Zwallet
              </h1>
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
                  <Col className="col d-none d-md-block">
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
                        marginRight: "19px",
                      }}
                      inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                      onComplete={() => handleComplete()}
                    />
                  </Col>
                  <Col className="col d-md-none">
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
                        width: "47px",
                        height: "58px",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                        border: status
                          ? "1.5px solid #6379f4"
                          : "1px solid rgba(169, 169, 169, 0.6)",
                        boxSizing: "border-box",
                        boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
                        color: "#3a3d42",
                        marginRight: "5px",
                      }}
                      inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                      onComplete={() => handleComplete()}
                    />
                  </Col>
                </Row>
              </form>
              <div className="d-flex justify-content-center">
                <Button
                  type="button"
                  className={`btn btn-confirm ${status ? "active" : ""}`}
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
