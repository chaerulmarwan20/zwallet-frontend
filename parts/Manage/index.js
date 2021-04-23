import { React, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";

export default function index() {
  const Url = process.env.api;

  const [user, setUser] = useState([]);

  const getData = () => {
    axios
      .get(`${Url}/users/find-one`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data.data[0];
        setUser(data);
      })
      .catch((err) => {
        if (err.response.data.message !== "Invalid signature") {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  };

  const handleClickTrash = () => {
    const id = localStorage.getItem("id");
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
        axios
          .delete(`${Url}/users/phoneNumber/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your phone number has been deleted.",
              icon: "success",
              confirmButtonColor: "#6379F4",
            });
            getData();
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.response.data.message,
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
            <p className="mt-2">{user.phoneNumber}</p>
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
