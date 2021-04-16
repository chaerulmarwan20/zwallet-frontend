import { React, useState } from "react";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const [type, setType] = useState("password");
  const [typeNew, setTypeNew] = useState("password");
  const [typeRepeat, setTypeRepeat] = useState("password");

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleToggleNew = () => {
    if (typeNew === "text") {
      setTypeNew("password");
    } else {
      setTypeNew("text");
    }
  };

  const handleToggleRepeat = () => {
    if (typeRepeat === "text") {
      setTypeRepeat("password");
    } else {
      setTypeRepeat("text");
    }
  };

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <h1>Change Password</h1>
        <p className="mt-3">
          You must enter your current password and then <br /> type your new
          password twice.
        </p>
        <form>
          <div className="form-group password">
            <img
              src="/images/lock-grey.png"
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input
              type={type}
              name="currentPassword"
              placeholder="Current password"
            />
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggle}
            />
          </div>
          <div className="form-group password">
            <img
              src="/images/lock-grey.png"
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input type={typeNew} name="password" placeholder="New password" />
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggleNew}
            />
          </div>
          <div className="form-group password">
            <img
              src="/images/lock-grey.png"
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input
              type={typeRepeat}
              name="repeatPassword"
              placeholder="Repeat new password"
            />
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggleRepeat}
            />
          </div>
          <Button type="button" className="btn btn-password mt-5">
            Change Password
          </Button>
        </form>
      </div>
    </Col>
  );
}
