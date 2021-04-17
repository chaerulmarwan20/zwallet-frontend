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
              <Col className="col-md-7 main">
                <Auth />
              </Col>
              <Col className="col-md-5 aside">
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
