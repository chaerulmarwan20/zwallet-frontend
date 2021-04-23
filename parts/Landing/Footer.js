import React from "react";
import Link from "next/link";

export default function Footer({ container: Container, row: Row, col: Col }) {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="col-md-12 mb-3">
            <Link href="#">
              <a>Zwallet</a>
            </Link>
          </Col>
          <Col className="col-md-12 mb-3">
            <p>
              Simplify financial needs and saving <br /> much time in banking
              needs with <br /> one single app.
            </p>
            <hr className="mt-5" />
          </Col>
          <Col className="col-md-12 d-flex flex-column flex-md-row justify-content-between">
            <div className="copyright">
              <p>2020 Zwallet. All right reserved.</p>
            </div>
            <div className="contact d-flex flex-column flex-md-row">
              <span>+62 5637 8882 9901</span>
              <span className="ml-0 ml-md-5">contact@zwallet.com</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
