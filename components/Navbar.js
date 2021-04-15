import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white custom">
      <div className="container">
        <Link href="#">
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
            <Image
              src="/images/profile.png"
              width={52}
              height={52}
              alt="Profile"
            />
          </div>
          <div className="profile mx-4 d-flex flex-column">
            <span className="name">Robert Chandler</span>
            <span className="number">+62 8139 3877 7946</span>
          </div>
          <Image
            src="/images/bell.png"
            width={24}
            height={24}
            alt="Bell"
            className="bell"
          />
        </div>
      </div>
    </nav>
  );
}
