import React from "react";
import Link from "next/link";
import Col from "../../components/module/Col";

export default function index({ firstName, lastName, email, phone }) {
  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="information p-5">
        <h1>Personal Information</h1>
        <p className="mt-3">
          We got your personal information from the sign
          <br className="d-none d-md-block" /> up proccess. If you want to make
          changes on <br className="d-none d-md-block" /> your information,
          contact our support.
        </p>
        <div className="details pt-3 pb-1 pl-3 mt-4">
          <span>First Name</span>
          <p className="mt-2">
            {firstName === "firstName" ? "your first name" : firstName}
          </p>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Last Name</span>
          <p className="mt-2">
            {lastName === "lastName" ? "your last name" : lastName}
          </p>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Verified E-mail</span>
          <p className="mt-2">{email}</p>
        </div>
        <div className="details pt-3 pl-3 pr-3 mt-3 d-flex justify-content-between align-items-center">
          <div>
            <span>Phone Number</span>
            <p className="mt-2">
              {phone === "000000000000" ? "your phone number" : phone}
            </p>
          </div>
          <div className="d-flex flex-column">
            {phone !== "000000000000" ? (
              <Link href="/profile/phone/manage">
                <a className="mb-3">Manage</a>
              </Link>
            ) : (
              <Link href="/profile/phone/add">
                <a className="mb-3">Add</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}
