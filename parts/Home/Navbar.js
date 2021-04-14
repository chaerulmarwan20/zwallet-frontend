import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light bg-transparent mt-4">
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
            <button type="button" className="btn btn-login">
              Login
            </button>
            <button type="button" className="btn btn-sign-up ml-4">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
