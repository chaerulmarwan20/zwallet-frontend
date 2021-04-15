import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  const [type, setType] = useState("password");
  const [typeNew, setTypeNew] = useState("password");
  const [typeRepeat, setTypeRepeat] = useState("password");

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleToggleNew = () => {
    if (typeNew === "text") {
      setTypeNew("password");
    } else {
      setTypeNew("text");
    }
  };

  const handleToggleRepeat = () => {
    if (typeRepeat === "text") {
      setTypeRepeat("password");
    } else {
      setTypeRepeat("text");
    }
  };

  return (
    <section className="change-password">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
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
          </div>
          <div className="col-md-9">
            <div className="details p-5">
              <h1>Change Password</h1>
              <p className="mt-3">
                You must enter your current password and then <br /> type your
                new password twice.
              </p>
              <form>
                <div className="form-group password">
                  <img
                    src="/images/lock-grey.png"
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <input
                    type={type}
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Current password"
                  />
                  <img
                    src="/images/eye-crossed.png"
                    width={24}
                    height={24}
                    alt="Eye"
                    className="eye-img"
                    onClick={handleToggle}
                  />
                </div>
                <div className="form-group password">
                  <img
                    src="/images/lock-grey.png"
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <input
                    type={typeNew}
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="New password"
                  />
                  <img
                    src="/images/eye-crossed.png"
                    width={24}
                    height={24}
                    alt="Eye"
                    className="eye-img"
                    onClick={handleToggleNew}
                  />
                </div>
                <div className="form-group password">
                  <img
                    src="/images/lock-grey.png"
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <input
                    type={typeRepeat}
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Repeat new password"
                  />
                  <img
                    src="/images/eye-crossed.png"
                    width={24}
                    height={24}
                    alt="Eye"
                    className="eye-img"
                    onClick={handleToggleRepeat}
                  />
                </div>
                <button type="button" className="btn btn-password mt-5">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
