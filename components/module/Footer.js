import React from "react";

export default function Footer() {
  return (
    <footer className="small mt-5 pb-4 pb-md-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-column flex-md-row justify-content-md-between">
            <div className="copyright">
              <p>2020 Zwallet. All right reserved.</p>
            </div>
            <div className="contact">
              <span className="mr-3 mr-md-5">+62 5637 8882 9901</span>
              <span>contact@zwallet.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
