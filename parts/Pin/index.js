import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <>
      <section className="pin py-5">
        <Container>
          <Row>
            <Col className="col-md-7 main">
              <div className="row">
                <div className="col-md-12">
                  <Link href="#">
                    <a className="zwallet">Zwallet</a>
                  </Link>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 d-flex">
                  <div className="image-1">
                    <Image
                      src="/images/phone2.png"
                      alt="Phone2"
                      width={278}
                      height={530}
                      className="phone-2"
                    />
                  </div>
                  <div className="image-2">
                    <Image
                      src="/images/phone.png"
                      alt="Phone"
                      width={278}
                      height={536}
                      className="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <h1>App that Covering Banking Needs.</h1>
                </div>
                <div className="col-md-12 mt-3">
                  <p>
                    Zwallet is an application that focussing in banking needs
                    for all users <br /> in the world. Always updated and always
                    following world trends. <br /> 5000+ users registered in
                    Zwallet everyday with worldwide <br /> users coverage.
                  </p>
                </div>
              </div>
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
                    <input type="text" className="form-control" />
                  </Col>
                  <Col className="col-md-2">
                    <input type="text" className="form-control" />
                  </Col>
                  <Col className="col-md-2">
                    <input type="text" className="form-control" />
                  </Col>
                  <Col className="col-md-2">
                    <input type="text" className="form-control" />
                  </Col>
                  <Col className="col-md-2">
                    <input type="text" className="form-control" />
                  </Col>
                  <Col className="col-md-2">
                    <input type="text" className="form-control" />
                  </Col>
                </Row>
              </form>
              <div className="d-flex justify-content-center">
                <Button type="button" className="btn btn-confirm">
                  Confirm
                </Button>
                {showSuccess === true && (
                  <Button type="button" className="btn btn-login-now">
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
