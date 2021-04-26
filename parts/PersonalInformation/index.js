import { React, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { findUser } from "../../configs/redux/actions/user";
import Col from "../../components/module/Col";

export default function index() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(findUser())
      .then((res) => {})
      .catch((err) => {
        if (
          err.message !== "Token is expired" &&
          err.message !== "Token is not active" &&
          err.message !== "Invalid signature"
        ) {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  }, []);

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
            {user.firstName === "firstName"
              ? "your first name"
              : user.firstName}
          </p>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Last Name</span>
          <p className="mt-2">
            {user.lastName === "lastName" ? "your last name" : user.lastName}
          </p>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Verified E-mail</span>
          <p className="mt-2">{user.email}</p>
        </div>
        <div className="details pt-3 pl-3 pr-3 mt-3 d-flex justify-content-between align-items-center">
          <div>
            <span>Phone Number</span>
            <p className="mt-2">
              {user.phoneNumber === "000000000000"
                ? "your phone number"
                : user.phoneNumber}
            </p>
          </div>
          <div className="d-flex flex-column">
            {user.phoneNumber !== "000000000000" ? (
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
