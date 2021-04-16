import React from "react";
import Link from "next/link";
import Col from "../../components/module/Col";

export default function index() {
  return (
    <Col className="col-md-9">
      <div className="information p-5">
        <h1>Personal Information</h1>
        <p className="mt-3">
          We got your personal information from the sign <br /> up proccess. If
          you want to make changes on <br /> your information, contact our
          support.
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
  );
}
