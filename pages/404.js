import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../components/module/Container";
import Row from "../components/module/Row";
import Col from "../components/module/Col";
import Button from "../components/module/Button";

export default function Page404() {
  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const handleClick = () => {
    router.push(`${token ? "/dashboard" : "/"}`);
  };

  return (
    <>
      <Head>
        <title>Zwallet | Page Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom py-4">
        <div className="container">
          <Link href={`${token ? "/dashboard" : "/"}`}>
            <a className="navbar-brand">Zwallet</a>
          </Link>
        </div>
      </nav>
      <section className="not-found">
        <Container>
          <Row>
            <Col className="col-12">
              <div className="ops d-flex flex-column justify-content-between align-items-center p-5">
                <div className="text-center">
                  <Image
                    src="/images/failed.png"
                    width={70}
                    height={70}
                    alt="Failed"
                  />
                  <h1 className="mt-4">Ooppss...</h1>
                  <h2 className="mt-3">Page not found</h2>
                  <p className="text-center mt-3">
                    We could not find the page you requested, we recommend
                    <br className="d-none d-md-block" /> that you check if the
                    page you requested is correct and try again.
                  </p>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <Button
                    type="button"
                    className="btn btn-back"
                    onClick={() => handleClick()}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className="small mt-5 pb-4 pb-md-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column flex-md-row justify-content-md-between">
              <div className="copyright">
                <p>2020 Zwallet. All right reserved.</p>
              </div>
              <div className="contact">
                <span className="mr-3 mr-md-5">+62 5637 8882 9901</span>
                <span>contact@zwallet.com</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
