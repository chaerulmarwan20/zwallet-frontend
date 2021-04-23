import React from "react";
import Image from "next/image";

export default function Features({ container: Container, row: Row, col: Col }) {
  return (
    <section className="features pt-0 pt-xl-4 pb-5 pb-xl-4">
      <Container>
        <Row>
          <Col className="col-md-5 d-none d-xl-block">
            <Image
              src="/images/phone2.png"
              alt="Phone2"
              width={450}
              height={856}
            />
          </Col>
          <Col className="col-12 col-xl-7">
            <h1 className="text-center text-xl-left">
              All The <span>Great</span>
              <br />
              Zwallet Features.
            </h1>
            <div className="step pl-4 pr-4 pt-4 pb-3 mt-5">
              <h3>
                <span>1. </span> Small Fee
              </h3>
              <p className="mt-2">
                We only charge 5% of every success transaction done in Zwallet
                app.
              </p>
            </div>
            <div className="step pl-4 pr-4 pt-4 pb-3 mt-4">
              <h3>
                <span>2. </span> Data Secured
              </h3>
              <p className="mt-2">
                All your data is secured properly in our system and it’s
                encrypted.
              </p>
            </div>
            <div className="step pl-4 pr-4 pt-4 pb-3 mt-4">
              <h3>
                <span>3. </span> User Friendly
              </h3>
              <p className="mt-2">
                Zwallet come up with modern and sleek design and not
                complicated.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
