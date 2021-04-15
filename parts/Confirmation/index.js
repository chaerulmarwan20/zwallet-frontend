import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <section className="confirmation">
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
                <div className="d-flex align-items-center mt-5 active">
                  <Image
                    src="/images/arrow-up-blue.png"
                    width={28}
                    height={28}
                    alt="Transfer"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Transfer</a>
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
            <div className="transfer p-5">
              <h1>Transfer To</h1>
              <div className="users d-flex align-items-center py-2 pl-3 mt-4">
                <div className="image">
                  <Image
                    src="/images/suhi.png"
                    width={70}
                    height={70}
                    alt="User"
                  />
                </div>
                <div className="profile d-flex flex-column ml-3">
                  <span className="name">Samuel Suhi</span>
                  <span className="number mt-1">+62 813-8492-9994</span>
                </div>
              </div>
              <h1 className="mt-4">Details</h1>
              <div className="details py-3 pl-3 mt-3">
                <span>Amount</span>
                <p className="mt-2">Rp100.000</p>
              </div>
              <div className="details py-3 pl-3 mt-3">
                <span>Balance Left</span>
                <p className="mt-2">Rp20.000</p>
              </div>
              <div className="details py-3 pl-3 mt-3">
                <span>Date & Time</span>
                <p className="mt-2">May 11, 2020 - 12.20</p>
              </div>
              <div className="details py-3 pl-3 mt-3">
                <span>Notes</span>
                <p className="mt-2">For buying some socks</p>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-continue"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter PIN to Transfer
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Enter your 6 digits PIN for confirmation to <br /> continue
                transferring money.
              </p>
              <form className="mt-5">
                <div className="row">
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                  <div className="col-md-2">
                    <input type="text" className="form-control pin" />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-continue"
                data-dismiss="modal"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
