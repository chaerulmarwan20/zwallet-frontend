import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <section className="profile">
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
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <Image
                    src="/images/profile.png"
                    width={80}
                    height={80}
                    alt="Profile"
                  />
                </div>
                <div>
                  <Image
                    src="/images/pencil.png"
                    width={10}
                    height={10}
                    alt="Edit"
                  />
                  <span className="ml-2">Edit</span>
                </div>
                <h1 className="mt-2">Robert Chandler</h1>
                <p className="mt-1">+62 813-9387-7946</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <div className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between">
                  <p>Personal Information</p>
                  <div>
                    <Image
                      src="/images/arrow-left.png"
                      width={28}
                      height={28}
                      alt="Arrow Left"
                    />
                  </div>
                </div>
                <div className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between mt-3">
                  <p>Change Password</p>
                  <div>
                    <Image
                      src="/images/arrow-left.png"
                      width={28}
                      height={28}
                      alt="Arrow Left"
                    />
                  </div>
                </div>
                <div className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between mt-3">
                  <p>Change PIN</p>
                  <div>
                    <Image
                      src="/images/arrow-left.png"
                      width={28}
                      height={28}
                      alt="Arrow Left"
                    />
                  </div>
                </div>
                <div className="option pt-4 pl-4 pb-1 pr-3 mt-3">
                  <p>Logout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
