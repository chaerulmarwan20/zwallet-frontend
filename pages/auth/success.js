import { React } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function success() {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/auth/login");
  };

  const handleClick = () => {
    router.push("/");
  };

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (token) {
    router.push("/dashboard");
  }

  return (
    <>
      <Head>
        <title>Zwallet | Create PIN Success</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pin-page">
        <section className="pin py-5">
          <Container>
            <Row>
              <Col className="col-lg-6 col-xl-7 d-none d-lg-block main">
                <Auth />
              </Col>
              <Col className="col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center d-lg-block aside">
                <h1 className="zwallet d-lg-none" onClick={() => handleClick()}>
                  Zwallet
                </h1>
                <img
                  src="/images/success.png"
                  width="70"
                  alt="Success"
                  className="mt-5"
                />
                <h1 className="mt-5 d-none d-lg-block">
                  Your PIN Was Successfully Created
                </h1>
                <h1 className="mt-5 d-lg-none">PIN Successfully Created</h1>
                <p className="mt-3 d-none d-lg-block">
                  Your PIN was successfully created and you can now access{" "}
                  <br />
                  all the features in Zwallet. Login to your new account and
                  <br /> start exploring!
                </p>
                <p className="mt-3 text-center d-lg-none">
                  Your PIN was successfully created and you can <br /> now
                  access all the features in Zwallet. Login to <br /> your new
                  account and start exploring!
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    className="btn btn-login-now"
                    onClick={() => handleClickLogin()}
                  >
                    Login Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
