import React from "react";
import Col from "../../components/module/Col";

export default function index() {
  return (
    <Col className="col-md-9">
      <div className="step-top-up p-5">
        <h1>How To Top Up</h1>
        <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
          <p>
            <span>1</span>Go to the nearest ATM or you can use E-Banking.
          </p>
        </div>
        <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
          <p>
            <span>2</span>Type your security number on the ATM or E-Banking.
          </p>
        </div>
        <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
          <p>
            <span>3</span>Select “Transfer” in the menu
          </p>
        </div>
        <div className="step mt-4 pl-4 pt-3 pb-1 d-flex align-items-center">
          <p>
            <span>4</span>Type the virtual account number that we provide you at
            the top.
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
            <span>8</span>You can see your money in Zwallet within 3 hours.
          </p>
        </div>
      </div>
    </Col>
  );
}
