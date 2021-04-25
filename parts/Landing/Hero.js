import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Hero({
  container: Container,
  row: Row,
  col: Col,
  button: Button,
}) {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/auth/login");
  };

  const handleClickSignUp = () => {
    router.push("/auth/signup");
  };

  const handleClickTry = () => {
    router.push("/auth/signup");
  };

  return (
    <section className="hero py-5">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col className="col-12 col-md-2">
            <div className="logo d-flex justify-content-center justify-content-md-start">
              <Link href="/">
                <a className="zwallet">Zwallet</a>
              </Link>
            </div>
          </Col>
          <Col className="col-md-6 col-lg-4 d-none d-md-flex justify-content-end">
            <div className="btn-container">
              <Button
                type="button"
                className="btn btn-login"
                onClick={() => handleClickLogin()}
              >
                Login
              </Button>
              <Button
                type="button"
                className="btn btn-sign-up ml-4"
                onClick={() => handleClickSignUp()}
              >
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="col-md-12 d-flex flex-column align-items-center">
            <h1 className="text-center mt-5">
              Awesome App <br />
              For Saving Time.
            </h1>
            <p className="text-center mt-4">
              We bring you a mobile app for banking problems that <br /> oftenly
              wasting much of your times.
            </p>
            <Button
              type="button"
              className="btn btn-try mt-4"
              onClick={() => handleClickTry()}
            >
              Try It Free
            </Button>
          </div>
        </Row>
      </Container>
    </section>
  );
}
