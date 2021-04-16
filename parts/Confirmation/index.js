import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  return (
    <>
      <Col className="col-md-9">
        <div className="transfer p-5">
          <h1>Transfer To</h1>
          <div className="users d-flex align-items-center py-2 pl-3 mt-4">
            <div className="image">
              <Image src="/images/suhi.png" width={70} height={70} alt="User" />
            </div>
            <div className="profile d-flex flex-column ml-3">
              <span className="name">Samuel Suhi</span>
              <span className="number mt-1">+62 813-8492-9994</span>
            </div>
          </div>
          <h1 className="mt-4">Details</h1>
          <div className="details py-3 pl-3 mt-3">
            <span>Amount</span>
            <p className="mt-2">Rp100.000</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Balance Left</span>
            <p className="mt-2">Rp20.000</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Date & Time</span>
            <p className="mt-2">May 11, 2020 - 12.20</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Notes</span>
            <p className="mt-2">For buying some socks</p>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="button" className="btn btn-continue" isModal>
              Continue
            </Button>
          </div>
        </div>
      </Col>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter PIN to Transfer
              </h5>
              <Button type="button" className="close" isDismiss>
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body">
              <p>
                Enter your 6 digits PIN for confirmation to <br /> continue
                transferring money.
              </p>
              <form className="mt-5">
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
              </form>
            </div>
            <div className="modal-footer">
              <Button type="button" className="btn btn-continue" isDismiss>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
