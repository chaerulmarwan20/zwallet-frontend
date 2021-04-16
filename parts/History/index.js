import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";

export default function index() {
  return (
    <section className="history">
      <Container>
        <Row>
          <Col className="col-md-3">
            <div className="sidebar d-flex flex-column justify-content-between p-5">
              <div className="main-menu d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center active">
                  <Image
                    src="/images/grid-blue.png"
                    width={28}
                    height={28}
                    alt="Dashboard"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Dashboard</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/arrow-up-grey.png"
                    width={28}
                    height={28}
                    alt="Transfer"
                  />
                  <Link href="#">
                    <a className="ml-4">Transfer</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/plus-grey.png"
                    width={28}
                    height={28}
                    alt="Top Up"
                  />
                  <Link href="#">
                    <a className="ml-4">Top Up</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/user-grey.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4">Profile</a>
                  </Link>
                </div>
              </div>
              <div className="logout-menu">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/log-out-grey.png"
                    width={28}
                    height={28}
                    alt="Log Out"
                  />
                  <Link href="#">
                    <a className="ml-4">Log Out</a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-md-9">
            <div className="transaction p-5">
              <h1>Transaction History</h1>
              <p className="time mt-3">This Week</p>
              <div className="users mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/suhi.png"
                    width={56}
                    height={56}
                    alt="User"
                  />
                  <div className="d-flex flex-column ml-3">
                    <span className="name">Samuel Suhi</span>
                    <span className="type mt-1">Transfer</span>
                  </div>
                </div>
                <div className="price">
                  <p className="transfer">+Rp50.000</p>
                </div>
              </div>
              <div className="users mt-5 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/netflix.png"
                    width={56}
                    height={56}
                    alt="Netflix"
                  />
                  <div className="d-flex flex-column ml-3">
                    <span className="name">Netflix</span>
                    <span className="type mt-1">Subscription</span>
                  </div>
                </div>
                <div className="price">
                  <p className="left">-Rp149.000</p>
                </div>
              </div>
              <p className="time mt-5">This Month</p>
              <div className="users mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/christine.png"
                    width={56}
                    height={56}
                    alt="Christine"
                  />
                  <div className="d-flex flex-column ml-3">
                    <span className="name">Christine Mar...</span>
                    <span className="type mt-1">Transfer</span>
                  </div>
                </div>
                <div className="price">
                  <p className="transfer">+Rp150.000</p>
                </div>
              </div>
              <div className="users mt-5 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/adobe.png"
                    width={56}
                    height={56}
                    alt="Adobe"
                  />
                  <div className="d-flex flex-column ml-3">
                    <span className="name">Adobe Inc.</span>
                    <span className="type mt-1">Subscription</span>
                  </div>
                </div>
                <div className="price">
                  <p className="left">-Rp249.000</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
