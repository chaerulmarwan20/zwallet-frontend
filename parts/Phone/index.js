import React from "react";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <h1>Add Phone Number</h1>
        <p className="mt-3">
          Add at least one phone number for the transfer <br /> ID so you can
          start transfering your money to <br /> another user.
        </p>
        <form className="mt-5">
          <div className="form-group phone">
            <img
              src="/images/phone-2-grey.png"
              width={24}
              height={24}
              alt="Phone"
              className="phone-img"
            />
            <img
              src="/images/62.png"
              width={29}
              height={15}
              alt="Number"
              className="number-img"
            />
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
          </div>
          <Button type="button" className="btn btn-phone mt-5">
            Add Phone Number
          </Button>
        </form>
      </div>
    </Col>
  );
}
