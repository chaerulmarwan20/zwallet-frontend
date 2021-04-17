import { React, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const [history, setHistory] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("id");

  const handleClickSort = (params) => {
    setSort(params);
  };

  const handleClickOrder = (params) => {
    setOrder(params);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`${Url}/transactions/${id}?order=${order}&sortBy=${sort}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data.data;
        setHistory(data);
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
  }, [order, sort]);

  return (
    <Col className="col-md-9">
      <div className="transaction p-5">
        <h1>Transaction History</h1>
        {/* <p className="time mt-3">This Week</p> */}
        {history.map((item, index) => {
          return (
            <div
              className="users mt-4 d-flex justify-content-between align-items-center"
              key={index}
            >
              <div className="d-flex align-items-center">
                <img
                  src={`${UrlImage}${item.image}`}
                  width={56}
                  height={56}
                  alt="User"
                  className="user"
                />
                <div className="d-flex flex-column ml-3">
                  <span className="name">{item.fullName}</span>
                  <span className="type mt-1">{item.type}</span>
                </div>
              </div>
              <div className="price">
                <p
                  className={`${
                    item.type === "Transfer" ? "left" : "transfer"
                  } mt-3`}
                >
                  {item.type === "Transfer"
                    ? `-Rp${item.amount}`
                    : `+Rp${item.amount}`}
                </p>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center mt-5">
          <Button
            type="button"
            className={`btn btn-order mr-3 ${order === "ASC" ? "active" : ""}`}
            onClick={() => handleClickOrder("ASC")}
          >
            <Image
              src="/images/arrow-left-red.png"
              width={30}
              height={30}
              alt="Order"
            />
          </Button>
          <Button
            type="button"
            className={`btn btn-order mr-3 ${order === "DESC" ? "active" : ""}`}
            onClick={() => handleClickOrder("DESC")}
          >
            <Image
              src="/images/arrow-left-green.png"
              width={30}
              height={30}
              alt="Order"
            />
          </Button>
          <div className="dropdown">
            <button
              className="btn btn-filter dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort by {sort}
            </button>
            <div className="dropdown-menu">
              <p
                className="dropdown-item"
                onClick={() => handleClickSort("id")}
              >
                Id
              </p>
              <p
                className="dropdown-item"
                onClick={() => handleClickSort("date")}
              >
                Date
              </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
