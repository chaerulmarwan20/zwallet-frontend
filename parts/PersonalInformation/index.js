import { React, useState, useEffect } from "react";
import Link from "next/link";
import axiosApiInstance from "../../helpers/axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";

export default function index({ firstName, lastName, email, phone }) {
  const Url = process.env.api;

  const [user, setUser] = useState([]);

  useEffect(() => {
    axiosApiInstance
      .get(`${Url}/users/find-one`)
      .then((res) => {
        const data = res.data.data[0];
        setUser(data);
      })
      .catch((err) => {
        if (err.response.data.message !== "Invalid signature") {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  }, []);

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
          <p className="mt-2">{firstName}</p>
        </div>
        <div className="details py-3 pl-3 mt-3">
          <span>Last Name</span>
          <p className="mt-2">{lastName}</p>
        </div>
        <div className="details py-3 pl-3 mt-3">
          <span>Verified E-mail</span>
          <p className="mt-2">{email}</p>
        </div>
        <div className="details pt-3 pl-3 pr-3 mt-3 d-flex justify-content-between align-items-center">
          <div>
            <span>Phone Number</span>
            <p className="mt-2">{phone}</p>
          </div>
          <div className="d-flex flex-column">
            {phone !== "none" ? (
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
