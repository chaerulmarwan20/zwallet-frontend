import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { findUser } from "../../configs/redux/actions/user";
import { getTransaction } from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Button from "./Button";

export default function Navbar(props) {
  const UrlImage = process.env.image;

  const router = useRouter();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { transaction } = useSelector((state) => state.transaction);

  const [empty, setEmpty] = useState(false);

  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    if (notification === false) {
      window.scrollTo(0, 0);
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  const handleClickLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will exit from this page!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      confirmButtonColor: "#FF5B37",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#1EC15F",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire({
          title: "Logout",
          text: "Successfull.",
          icon: "success",
          confirmButtonColor: "#6379F4",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/");
          } else {
            router.push("/");
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Logout",
          text: "Cancelled :)",
          icon: "info",
          confirmButtonColor: "#6379F4",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(findUser())
      .then((res) => {})
      .catch((err) => {
        if (err.message !== "Invalid signature") {
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

  useEffect(() => {
    dispatch(getTransaction())
      .then((res) => {
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom py-4">
        <div className="container">
          <Link href="/dashboard">
            <a className="navbar-brand">Zwallet</a>
          </Link>
          <Button className="navbar-toggler" type="button" isNavbar>
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav custom d-lg-none mt-2 d-flex">
              <Link href="/dashboard">
                <a
                  className={`nav-link ${
                    props.active === "dashboard" ? "active" : ""
                  }`}
                >
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </Link>
              <Link href="/transfer">
                <a
                  className={`nav-link ${
                    props.active === "transfer" ? "active" : ""
                  }`}
                >
                  Transfer
                </a>
              </Link>
              <Link href="/topup">
                <a
                  className={`nav-link ${
                    props.active === "topup" ? "active" : ""
                  }`}
                >
                  Top Up
                </a>
              </Link>
              <Link href="/profile">
                <a
                  className={`nav-link ${
                    props.active === "profile" ? "active" : ""
                  }`}
                >
                  Profile
                </a>
              </Link>
              <Link href="/notification">
                <a
                  className={`nav-link ${
                    props.active === "notification" ? "active" : ""
                  }`}
                >
                  Notification
                </a>
              </Link>
              <Link href="#">
                <a className="nav-link" onClick={() => handleClickLogout()}>
                  Log Out
                </a>
              </Link>
            </div>
            <div className="navbar-nav ml-auto d-none d-lg-block">
              {user.image !== undefined && (
                <img
                  src={`${UrlImage}${user.image}`}
                  width={52}
                  height={52}
                  alt="Profile"
                  className="user"
                />
              )}
            </div>
            <div className="profile mx-4 d-none d-lg-flex flex-column">
              <span className="name">
                {user.fullName === "firstName lastName"
                  ? "your full name"
                  : user.fullName}
              </span>
              <span className="number">
                {user.phoneNumber === "000000000000"
                  ? "your phone number"
                  : user.phoneNumber}
              </span>
            </div>
            <Image
              src="/images/bell.png"
              width={24}
              height={24}
              alt="Bell"
              className="bell d-none d-lg-block"
              onClick={() => showNotification()}
            />
          </div>
        </div>
      </nav>
      {notification === true && (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="notification p-4">
                {/* <h3>Today</h3> */}
                {transaction.map((item, index) => {
                  return (
                    <div className="history p-3 mt-4" key={index}>
                      <div className="d-flex align-items-center">
                        <div>
                          <Image
                            src={`${
                              item.type === "Receive"
                                ? "/images/arrow-up-green.png"
                                : item.type === "Top Up"
                                ? "/images/arrow-up-green.png"
                                : "/images/arrow-up-red.png"
                            }`}
                            width={28}
                            height={28}
                            alt="Arrow Up"
                          />
                        </div>
                        <div className="detail d-flex flex-column ml-2">
                          <span className="info">
                            {item.type === "Receive"
                              ? "Transfered from "
                              : item.type === "Top Up"
                              ? "Top Up from "
                              : "Transfer to "}
                            {item.fullName.length > 10
                              ? `${item.fullName.substring(0, 10)}...`
                              : item.fullName}
                          </span>
                          <span className="price mt-1">
                            {Rupiah(Number(item.amount))}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {empty === true && (
                  <p className="text-center mt-3">
                    You don't have any notifications.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
