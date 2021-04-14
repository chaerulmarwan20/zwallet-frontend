import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <Link href="#">
              <a>Zwallet</a>
            </Link>
          </div>
          <div className="col-md-12 mb-3">
            <p>
              Simplify financial needs and saving <br /> much time in banking
              needs with <br /> one single app.
            </p>
            <hr className="mt-5" />
          </div>
          <div className="col-md-12 d-flex justify-content-between">
            <div className="copyright">
              <p>2020 Zwallet. All right reserved.</p>
            </div>
            <div className="contact">
              <span>+62 5637 8882 9901</span>
              <span className="ml-5">contact@zwallet.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
