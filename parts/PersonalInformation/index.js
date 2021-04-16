import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";

export default function index() {
  return (
    <section className="personal">
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
            <div className="information p-5">
              <h1>Personal Information</h1>
              <p className="mt-3">
                We got your personal information from the sign <br /> up
                proccess. If you want to make changes on <br /> your
                information, contact our support.
              </p>
              <div className="details py-3 pl-3 mt-4">
                <span>First Name</span>
                <p className="mt-2">Robert</p>
              </div>
              <div className="details py-3 pl-3 mt-3">
                <span>Last Name</span>
                <p className="mt-2">Chandler</p>
              </div>
              <div className="details py-3 pl-3 mt-3">
                <span>Verified E-mail</span>
                <p className="mt-2">pewdiepie1@gmail.com</p>
              </div>
              <div className="details pt-3 pl-3 pr-3 mt-3 d-flex justify-content-between align-items-center">
                <div>
                  <span>Phone Number</span>
                  <p className="mt-2">+62 813-9387-7946</p>
                </div>
                <Link href="/manage">
                  <a className="mb-3">Manage</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
