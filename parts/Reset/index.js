import { React, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleToggleConfirm = () => {
    if (typeConfirm === "text") {
      setTypeConfirm("password");
    } else {
      setTypeConfirm("text");
    }
  };

  return (
    <>
      <Head>
        <title>Zwallet | Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="reset py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 main">
              <div className="row">
                <div className="col-md-12">
                  <Link href="#">
                    <a className="zwallet">Zwallet</a>
                  </Link>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 d-flex">
                  <div className="image-1">
                    <Image
                      src="/images/phone2.png"
                      alt="Phone2"
                      width={278}
                      height={530}
                      className="phone-2"
                    />
                  </div>
                  <div className="image-2">
                    <Image
                      src="/images/phone.png"
                      alt="Phone"
                      width={278}
                      height={536}
                      className="phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <h1>App that Covering Banking Needs.</h1>
                </div>
                <div className="col-md-12 mt-3">
                  <p>
                    Zwallet is an application that focussing in banking needs
                    for all users <br /> in the world. Always updated and always
                    following world trends. <br /> 5000+ users registered in
                    Zwallet everyday with worldwide <br /> users coverage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 aside">
              <h1 className="mt-5">
                Did You Forgot Your Password? <br /> Don’t Worry, You Can Reset
                Your <br />
                Password In a Minutes.
              </h1>
              <p className="mt-3">
                To reset your password, you must type your e-mail and we <br />
                will send a link to your email and you will be directed to the
                <br /> reset password screens.
              </p>
              {showConfirm === true && (
                <p className="mt-3">
                  Now you can create a new password for your Zwallet <br />
                  account. Type your password twice so we can confirm your{" "}
                  <br />
                  new passsword.
                </p>
              )}
              <form className="mt-5">
                <div className="form-group mail">
                  <img
                    src="/images/mail-grey.png"
                    width={24}
                    height={24}
                    alt="Mail"
                    className="mail-img"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                  />
                </div>
                {showConfirm === true && (
                  <>
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
                        placeholder="Create new password"
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
                    <div className="form-group confirm-password">
                      <img
                        src="/images/lock-grey.png"
                        width={24}
                        height={24}
                        alt="Lock"
                        className="confirm-password-img"
                      />
                      <input
                        type={typeConfirm}
                        className="form-control"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Create new password"
                      />
                      <img
                        src="/images/eye-crossed.png"
                        width={24}
                        height={24}
                        alt="Eye"
                        className="eye-img"
                        onClick={handleToggleConfirm}
                      />
                    </div>
                  </>
                )}
              </form>
              <button type="button" className="btn btn-confirm mt-5">
                Confirm
              </button>
              {showConfirm === true && (
                <button type="button" className="btn btn-reset mt-5">
                  Reset Password
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
