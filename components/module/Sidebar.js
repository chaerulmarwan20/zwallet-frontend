import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Col from "./Col";

export default function Sidebar(props) {
  const Url = process.env.api;

  const router = useRouter();

  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("id");
  }

  const handleClickLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be removed from this page!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      confirmButtonColor: "#FF5B37",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#1EC15F",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`${Url}/users/auth/logout`)
          .then((res) => {
            localStorage.clear();
            Swal.fire({
              title: "Logout!",
              text: res.data.message,
              icon: "success",
              confirmButtonText: "Ok",
              confirmButtonColor: "#6379F4",
            }).then((result) => {
              if (result.isConfirmed) {
                router.push("/");
              } else {
                router.push("/");
              }
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.response.data.message,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#6379F4",
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Logout!",
          text: "Cancelled :)",
          icon: "info",
          confirmButtonColor: "#6379F4",
        });
      }
    });
  };

  return (
    <Col className="col-md-3">
      <div className="sidebar d-flex flex-column justify-content-between p-5">
        <div className="main-menu d-flex flex-column justify-content-between">
          <div
            className={`d-flex align-items-center ${
              props.active === "dashboard" ? "active" : ""
            }`}
          >
            <Image
              src={`${
                props.active === "dashboard"
                  ? "/images/grid-blue.png"
                  : "/images/grid-grey.png"
              }`}
              width={28}
              height={28}
              alt="Dashboard"
            />
            <Link href="/dashboard">
              <a
                className={`ml-4 ${
                  props.active === "dashboard" ? "active" : ""
                }`}
              >
                Dashboard
              </a>
            </Link>
          </div>
          <div
            className={`d-flex align-items-center mt-5 ${
              props.active === "transfer" ? "active" : ""
            }`}
          >
            <Image
              src={`${
                props.active === "transfer"
                  ? "/images/arrow-up-blue.png"
                  : "/images/arrow-up-grey.png"
              }`}
              width={28}
              height={28}
              alt="Transfer"
            />
            <Link href="/transfer">
              <a
                className={`ml-4 ${
                  props.active === "transfer" ? "active" : ""
                }`}
              >
                Transfer
              </a>
            </Link>
          </div>
          <div
            className={`d-flex align-items-center mt-5 ${
              props.active === "topup" ? "active" : ""
            }`}
          >
            <Image
              src={`${
                props.active === "topup"
                  ? "/images/plus-blue.png"
                  : "/images/plus-grey.png"
              }`}
              width={28}
              height={28}
              alt="Top Up"
            />
            <Link href="/topup">
              <a className={`ml-4 ${props.active === "topup" ? "active" : ""}`}>
                Top Up
              </a>
            </Link>
          </div>
          <div
            className={`d-flex align-items-center mt-5 ${
              props.active === "profile" ? "active" : ""
            }`}
          >
            <Image
              src={`${
                props.active === "profile"
                  ? "/images/user-blue.png"
                  : "/images/user-grey.png"
              }`}
              width={28}
              height={28}
              alt="Profile"
            />
            {id !== undefined && (
              <Link href="/profile">
                <a
                  className={`ml-4 ${
                    props.active === "profile" ? "active" : ""
                  }`}
                >
                  Profile
                </a>
              </Link>
            )}
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
            <a className="ml-4 logout" onClick={() => handleClickLogout()}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}
