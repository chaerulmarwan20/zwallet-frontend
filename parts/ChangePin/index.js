import { React, useState } from "react";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <h1>Change PIN</h1>
        <p className="mt-3">
          Enter your current 6 digits Zwallet PIN below to <br /> continue to
          the next steps.
        </p>
        {showSuccess === true && (
          <p>
            Type your new 6 digits security PIN to use in <br /> Zwallet.
          </p>
        )}
        <form>
          <Row>
            <Col className="col-md-2">
              <Input type="text" className="pin" isMax />
            </Col>
            <Col className="col-md-2">
              <Input type="text" className="pin" isMax />
            </Col>
            <Col className="col-md-2">
              <Input type="text" className="pin" isMax />
            </Col>
            <Col className="col-md-2">
              <Input type="text" className="pin" isMax />
            </Col>
            <Col className="col-md-2">
              <Input type="text" className="pin" isMax />
            </Col>
            <Col className="col-md-2">
              <Input type="text" className="pin" isMax />
            </Col>
          </Row>
          <Button type="button" className="btn btn-continue mt-5">
            Continue
          </Button>
          {showSuccess === true && (
            <Button type="button" className="btn btn-pin mt-5">
              Change PIN
            </Button>
          )}
        </form>
      </div>
    </Col>
  );
}
