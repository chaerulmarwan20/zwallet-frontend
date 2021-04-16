import React from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";

export default function index() {
  const handleClickTrash = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#FF5B37",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#1EC15F",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your phone number has been deleted.",
          icon: "success",
          confirmButtonColor: "#6379F4",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled!",
          text: "Your phone number is safe :)",
          icon: "info",
          confirmButtonColor: "#6379F4",
        });
      }
    });
  };

  return (
    <section className="manage">
      <Container>
        <Row>
          <Col className="col-md-3">
            <div className="sidebar d-flex flex-column justify-content-between p-5">
              <div className="main-menu d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/grid-grey.png"
                    width={28}
                    height={28}
                    alt="Dashboard"
                  />
                  <Link href="#">
                    <a className="ml-4">Dashboard</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/arrow-up-grey.png"
                    width={28}
                    height={28}
                    alt="Transfer"
                  />
                  <Link href="#">
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
                  <Link href="#">
                    <a className="ml-4">Top Up</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5 active">
                  <Image
                    src="/images/user-blue.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Profile</a>
                  </Link>
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
          <Col className="col-md-9">
            <div className="information p-5">
              <h1>Manage Phone Number</h1>
              <p className="mt-3">
                You can only delete the phone number and <br /> then you must
                add another phone number.
              </p>
              <div className="details pt-3 pl-3 pr-4 mt-4 d-flex justify-content-between align-items-center">
                <div>
                  <span>Primary</span>
                  <p className="mt-2">+62 813-9387-7946</p>
                </div>
                <div>
                  <img
                    src="/images/trash.png"
                    width={28}
                    height={28}
                    alt="Trash"
                    className="trash"
                    onClick={() => handleClickTrash()}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
