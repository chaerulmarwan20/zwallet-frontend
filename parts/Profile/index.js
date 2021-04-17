import { React, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const [user, setUser] = useState([]);

  const handleClickPersonal = () => {
    router.push("/profile/info");
  };

  const handleClickPassword = () => {
    router.push("/profile/password/change");
  };

  const handleClickPin = () => {
    router.push("/profile/pin/change");
  };

  const handleClickLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be removed from this page!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      confirmButtonColor: "#FF5B37",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#1EC15F",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire({
          title: "Logout!",
          text: "Successfull.",
          icon: "success",
          confirmButtonColor: "#6379F4",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/");
          } else {
            router.push("/");
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Logout!",
          text: "Cancelled :)",
          icon: "info",
          confirmButtonColor: "#6379F4",
        });
      }
    });
  };

  useEffect(() => {
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
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        });
      });
  }, []);

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            {user.image !== undefined && (
              <img
                src={`${UrlImage}${user.image}`}
                width={80}
                height={80}
                alt="Profile"
                className="user"
              />
            )}
          </div>
          <div className="edit mt-2">
            <Image src="/images/pencil.png" width={10} height={10} alt="Edit" />
            <span className="ml-2">Edit</span>
          </div>
          <h1 className="mt-2">{user.fullName}</h1>
          <p className="mt-1">{user.phoneNumber}</p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-4">
          <div
            className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between"
            onClick={() => handleClickPersonal()}
          >
            <p>Personal Information</p>
            <div>
              <Image
                src="/images/arrow-left.png"
                width={28}
                height={28}
                alt="Arrow Left"
              />
            </div>
          </div>
          <div
            className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between mt-3"
            onClick={() => handleClickPassword()}
          >
            <p>Change Password</p>
            <div>
              <Image
                src="/images/arrow-left.png"
                width={28}
                height={28}
                alt="Arrow Left"
              />
            </div>
          </div>
          <div
            className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between mt-3"
            onClick={() => handleClickPin()}
          >
            <p>Change PIN</p>
            <div>
              <Image
                src="/images/arrow-left.png"
                width={28}
                height={28}
                alt="Arrow Left"
              />
            </div>
          </div>
          <div
            className="option pt-4 pl-4 pb-1 pr-3 mt-3"
            onClick={() => handleClickLogout()}
          >
            <p>Logout</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
