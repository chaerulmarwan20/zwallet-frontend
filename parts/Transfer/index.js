import { React, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const [query, setQuery] = useState("");
  const [result, setResult] = useState(false);
  const [user, setUser] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleFormChange = (event) => {
    setQuery(event.target.value);
    axios
      .get(`${Url}/users/?keyword=${event.target.value}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (event.target.value === "") {
          setResult(false);
        } else {
          setResult(true);
        }
        setUser(res.data.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        }).then((result) => {
          setResult(false);
          if (result.isConfirmed) {
            setQuery("");
          } else {
            setQuery("");
          }
        });
      });
  };

  return (
    <Col className="col-md-9">
      <div className="search-receiver p-5">
        <h1>Search Receiver</h1>
        <form className="mt-4">
          <div className="form-group receiver">
            <img
              src="/images/search.png"
              width={24}
              height={24}
              alt="Search"
              className="search-img"
            />
            <Input
              type="text"
              name="keyword"
              placeholder="Search receiver here"
              value={query}
              onChange={handleFormChange}
            />
          </div>
        </form>
        {result === true &&
          user.map((item, index) => {
            return (
              <div
                className="users d-flex align-items-center py-2 pl-3 mt-4"
                key={index}
              >
                <div className="image">
                  <img
                    src={`${UrlImage}${item.image}`}
                    width={70}
                    height={70}
                    alt="User"
                    className="user"
                  />
                </div>
                <div className="profile d-flex flex-column ml-3">
                  <span className="name">{item.fullName}</span>
                  <span className="number mt-1">{item.phoneNumber}</span>
                </div>
              </div>
            );
          })}
        {showResult === true && (
          <>
            <h1>Transfer Money</h1>
            <div className="users d-flex align-items-center py-2 pl-3 mt-4">
              <div className="image">
                <Image
                  src="/images/suhi.png"
                  width={70}
                  height={70}
                  alt="User"
                />
              </div>
              <div className="profile d-flex flex-column ml-3">
                <span className="name">Samuel Suhi</span>
                <span className="number mt-1">+62 813-8492-9994</span>
              </div>
            </div>
            <p className="mt-4">
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
            <form className="mt-5">
              <div className="form-group">
                <Input
                  type="text"
                  className="amount"
                  name="amount"
                  placeholder="0.00"
                />
              </div>
            </form>
            <p className="credit text-center mt-4">Rp120.000 Available</p>
            <div className="d-flex justify-content-center">
              <form className="mt-5">
                <div className="form-group pencil">
                  <img
                    src="/images/pencil.png"
                    width={24}
                    height={24}
                    alt="Pencil"
                    className="pencil-img"
                  />
                  <Input
                    type="text"
                    className="notes"
                    name="notes"
                    placeholder="Add some notes"
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-end">
              <Button type="button" className="btn btn-continue">
                Continue
              </Button>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}
