import React from "react";
import Swal from "sweetalert2";
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
    <Col className="col-md-9">
      <div className="information p-5">
        <h1>Manage Phone Number</h1>
        <p className="mt-3">
          You can only delete the phone number and <br /> then you must add
          another phone number.
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
  );
}
