import { React, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { findUser, deletePhoneNumber } from "../../actions";
import Col from "../../components/module/Col";

export default function index() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const getData = () => {
    dispatch(findUser())
      .then((res) => {})
      .catch((err) => {
        if (err.message !== "Invalid signature") {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  };

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
        dispatch(deletePhoneNumber())
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your phone number has been deleted.",
              icon: "success",
              confirmButtonColor: "#6379F4",
            });
            dispatch(findUser());
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#6379F4",
            });
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

  useEffect(() => {
    getData();
  }, []);

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
            <p className="mt-2">
              {user.phoneNumber === "000000000000" ? "none" : user.phoneNumber}
            </p>
          </div>
          <div>
            {user.phoneNumber === "000000000000" ? (
              <Link href="/profile/phone/add">
                <a className="mb-3">Add</a>
              </Link>
            ) : (
              <img
                src="/images/trash.png"
                width={28}
                height={28}
                alt="Trash"
                className="trash"
                onClick={() => handleClickTrash()}
              />
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}
