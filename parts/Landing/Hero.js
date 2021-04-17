import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero({
  container: Container,
  row: Row,
  col: Col,
  button: Button,
}) {
  const router = useRouter();

  const handleClickTry = () => {
    router.push("/auth/signup");
  };

  return (
    <section className="hero">
      <Container>
        <Row>
          <Col className="col-md-6">
            <h1 className="mt-4">
              Awesome App <br /> For Saving <span>Time.</span>
            </h1>
            <p className="mt-4">
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
          </Col>
          <Col className="col-md-6">
            <div className="phone">
              <Image
                src="/images/phone.png"
                alt="Phone"
                width={439}
                height={846}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
