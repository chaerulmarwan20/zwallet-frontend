import { React, useState } from "react";
import { useRouter } from "next/router";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const router = useRouter();

  const [showSuccess, setShowSuccess] = useState(false);

  const handleClickLogin = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <section className="pin py-5">
        <Container>
          <Row>
            <Col className="col-md-7 main">
              <Auth />
            </Col>
            <Col className="col-md-5 aside">
              {showSuccess === true && (
                <>
                  <img
                    src="/images/success.png"
                    width="70"
                    alt="Success"
                    className="mt-5"
                  />
                  <h1 className="mt-5">Your PIN Was Successfully Created</h1>
                  <p className="mt-3">
                    Your PIN was successfully created and you can now access{" "}
                    <br />
                    all the features in Zwallet. Login to your new account and
                    <br /> start exploring!
                  </p>
                </>
              )}
              <h1 className="mt-5">
                Secure Your Account, Your Wallet, <br /> and Your Data With 6
                Digits PIN <br /> That You Created Yourself.
              </h1>
              <p className="mt-3">
                Create 6 digits pin to secure all your money and your data in
                <br />
                Zwallet app. Keep it secret and don’t tell anyone about your
                <br />
                Zwallet account password and the PIN.
              </p>
              <form className="mt-5">
                <Row>
                  <Col className="col-md-2">
                    <Input type="text" isMax />
                  </Col>
                  <Col className="col-md-2">
                    <Input type="text" isMax />
                  </Col>
                  <Col className="col-md-2">
                    <Input type="text" isMax />
                  </Col>
                  <Col className="col-md-2">
                    <Input type="text" isMax />
                  </Col>
                  <Col className="col-md-2">
                    <Input type="text" isMax />
                  </Col>
                  <Col className="col-md-2">
                    <Input type="text" isMax />
                  </Col>
                </Row>
              </form>
              <div className="d-flex justify-content-center">
                <Button type="button" className="btn btn-confirm">
                  Confirm
                </Button>
                {showSuccess === true && (
                  <Button
                    type="button"
                    className="btn btn-login-now"
                    onClick={() => handleClickLogin()}
                  >
                    Login Now
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
