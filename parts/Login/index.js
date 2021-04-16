import { React, useState } from "react";
import Link from "next/link";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const [type, setType] = useState("password");
  const [showError, setShowError] = useState(false);

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <>
      <section className="login py-5">
        <Container>
          <Row>
            <Col className="col-md-7 main">
              <Auth />
            </Col>
            <Col className="col-md-5 aside">
              <h1 className="mt-5">
                Start Accessing Banking Needs <br /> With All Devices and All
                Platforms <br />
                With 30.000+ Users
              </h1>
              <p className="mt-3">
                Transfering money is eassier than ever, you can access <br />
                Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
                we cover all of that for you!
              </p>
              <form className="mt-5">
                <div className="form-group mail">
                  <img
                    src="/images/mail-grey.png"
                    width={24}
                    height={24}
                    alt="Mail"
                    className="mail-img"
                  />
                  <Input
                    type="text"
                    name="email"
                    placeholder="Enter your e-mail"
                  />
                </div>
                <div className="form-group password">
                  <img
                    src="/images/lock-grey.png"
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <Input
                    type={type}
                    name="password"
                    placeholder="Enter your password"
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
              <Link href="/reset">
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
                  showError === true ? "mt-3" : "mt-5"
                }`}
              >
                Login
              </Button>
              <p className="text-center mt-5 account">
                Don’t have an account? Let’s{" "}
                <Link href="/signup">
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
