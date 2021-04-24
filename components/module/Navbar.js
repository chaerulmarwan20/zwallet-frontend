import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { findUser } from "../../actions";
import axiosApiInstance from "../../helpers/axios";
import Swal from "sweetalert2";
import Rupiah from "../../helpers/rupiah";

export default function Navbar() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [history, setHistory] = useState([]);
  const [empty, setEmpty] = useState(false);

  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    if (notification === false) {
      setNotification(true);
    } else {
      setNotification(false);
    }
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
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/${id}?order=DESC`)
      .then((res) => {
        const data = res.data.data;
        setHistory(data);
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top custom">
        <div className="container">
          <Link href="/dashboard">
            <a className="navbar-brand">Zwallet</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
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
            <div className="profile mx-4 d-flex flex-column">
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
              className="bell"
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
                {history.map((item, index) => {
                  return (
                    <div className="history p-3 mt-4">
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
