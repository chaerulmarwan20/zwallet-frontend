import React from "react";
import Image from "next/image";

export default function Partners({ container: Container, row: Row, col: Col }) {
  return (
    <section className="partners">
      <Container>
        <Row>
          <Col className="col-12 col-xl-6">
            <h1 className="text-center text-xl-left">
              100+ <span>Trusted</span>
              <br />
              Partners.
            </h1>
            <p className="mt-4 text-center text-xl-left">
              We have reached global level and have 100+
              <br />
              brand partners around the globe.
            </p>
          </Col>
          <Col className="col-12 col-xl-6 d-flex flex-wrap justify-content-center">
            <Image
              src="/images/airbnb.png"
              alt="AirBnb"
              width={173}
              height={120}
            />
            <Image
              src="/images/canon.png"
              alt="Canon"
              width={174}
              height={120}
              className="ml-2"
            />
            <Image src="/images/dell.png" alt="Dell" width={173} height={120} />
            <Image
              src="/images/microsoft.png"
              alt="Microsoft"
              width={173}
              height={120}
            />
            <Image
              src="/images/dropbox.png"
              alt="Dropbox"
              width={174}
              height={120}
            />
            <Image src="/images/hm.png" alt="H&M" width={173} height={120} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
