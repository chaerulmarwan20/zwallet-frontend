import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  return (
    <section className="phone">
      <Container>
        <Row>
          <Col className="col-md-3">
            <div className="sidebar d-flex flex-column justify-content-between p-5">
              <div className="main-menu d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/grid-grey.png"
                    width={28}
                    height={28}
                    alt="Dashboard"
                  />
                  <Link href="#">
                    <a className="ml-4">Dashboard</a>
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
                <div className="d-flex align-items-center mt-5 active">
                  <Image
                    src="/images/user-blue.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Profile</a>
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
            <div className="details p-5">
              <h1>Add Phone Number</h1>
              <p className="mt-3">
                Add at least one phone number for the transfer <br /> ID so you
                can start transfering your money to <br /> another user.
              </p>
              <form className="mt-5">
                <div className="form-group phone">
                  <img
                    src="/images/phone-2-grey.png"
                    width={24}
                    height={24}
                    alt="Phone"
                    className="phone-img"
                  />
                  <img
                    src="/images/62.png"
                    width={29}
                    height={15}
                    alt="Number"
                    className="number-img"
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                </div>
                <Button type="button" className="btn btn-phone mt-5">
                  Add Phone Number
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
