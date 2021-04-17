import React from "react";
import Image from "next/image";
import Link from "next/link";
import Col from "./Col";

export default function Sidebar() {
  let id;
  if (typeof window !== "undefined") {
    id = localStorage.getItem("id");
  }
  return (
    <Col className="col-md-3">
      <div className="sidebar d-flex flex-column justify-content-between p-5">
        <div className="main-menu d-flex flex-column justify-content-between">
          <div className="d-flex align-items-center active">
            <Image
              src="/images/grid-blue.png"
              width={28}
              height={28}
              alt="Dashboard"
            />
            <Link href="/dashboard">
              <a className="ml-4 active">Dashboard</a>
            </Link>
          </div>
          <div className="d-flex align-items-center mt-5">
            <Image
              src="/images/arrow-up-grey.png"
              width={28}
              height={28}
              alt="Transfer"
            />
            <Link href="/transfer">
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
            <Link href="/topup">
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
            {id !== undefined && (
              <Link href={`/profile/${id}`}>
                <a className="ml-4">Profile</a>
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
            <Link href="#">
              <a className="ml-4">Log Out</a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
}
