import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <section className="top-up">
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
                <div className="d-flex align-items-center mt-5 active">
                  <Image
                    src="/images/plus-blue.png"
                    width={28}
                    height={28}
                    alt="Top Up"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Top Up</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/user-grey.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4">Profile</a>
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
            <div className="step-top-up p-5">
              <h1>How To Top Up</h1>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>1</span>Go to the nearest ATM or you can use E-Banking.
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>2</span>Type your security number on the ATM or
                  E-Banking.
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>3</span>Select “Transfer” in the menu
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>4</span>Type the virtual account number that we provide
                  you at the top.
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>5</span>Type the amount of the money you want to top up.
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>6</span>Read the summary details
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>7</span>Press transfer / top up
                </p>
              </div>
              <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
                <p>
                  <span>8</span>You can see your money in Zwallet within 3
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
