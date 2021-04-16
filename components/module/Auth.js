import React from "react";
import Link from "next/link";
import Image from "next/image";
import Row from "./Row";
import Col from "./Col";

export default function Auth() {
  return (
    <>
      <Row>
        <Col className="col-md-12">
          <Link href="/">
            <a className="zwallet">Zwallet</a>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-12 d-flex">
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
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="col-md-12">
          <h1>App that Covering Banking Needs.</h1>
        </Col>
        <Col className="col-md-12 mt-3">
          <p>
            Zwallet is an application that focussing in banking needs for all
            users <br /> in the world. Always updated and always following world
            trends. <br /> 5000+ users registered in Zwallet everyday with
            worldwide <br /> users coverage.
          </p>
        </Col>
      </Row>
    </>
  );
}
