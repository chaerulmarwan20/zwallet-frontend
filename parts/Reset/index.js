import { React, useState } from "react";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");
  const [showConfirm, setShowConfirm] = useState(false);

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
              {showConfirm === true && (
                <p className="mt-3">
                  Now you can create a new password for your Zwallet <br />
                  account. Type your password twice so we can confirm your{" "}
                  <br />
                  new passsword.
                </p>
              )}
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
                {showConfirm === true && (
                  <>
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
                        placeholder="Create new password"
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
                        src="/images/lock-grey.png"
                        width={24}
                        height={24}
                        alt="Lock"
                        className="confirm-password-img"
                      />
                      <Input
                        type={typeConfirm}
                        name="confirmPassword"
                        placeholder="Create new password"
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
                  </>
                )}
              </form>
              <Button type="button" className="btn btn-confirm mt-5">
                Confirm
              </Button>
              {showConfirm === true && (
                <Button type="button" className="btn btn-reset mt-5">
                  Reset Password
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
