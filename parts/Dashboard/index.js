import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([]);

  const router = useRouter();

  const handleClickTransfer = () => {
    router.push("/transfer");
  };

  const handleClickTopUp = () => {
    router.push("/topup");
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

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`${Url}/transactions/${id}`, {
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
  }, []);

  return (
    <Col className="col-md-9">
      <div className="balance p-4 d-flex justify-content-between">
        <div className="info">
          <p>Balance</p>
          <h1>Rp{user.credit}</h1>
          <span>{user.phoneNumber}</span>
        </div>
        <div className="button-container">
          <Button
            type="button"
            className="btn btn-balance d-flex justify-content-center align-items-center"
            onClick={() => handleClickTransfer()}
          >
            <Image
              src="/images/arrow-up-purple.png"
              width={28}
              height={28}
              alt="Transfer"
            />
            <span className="ml-2">Transfer</span>
          </Button>
          <Button
            type="button"
            className="btn btn-balance d-flex justify-content-center align-items-center mt-3"
            onClick={() => handleClickTopUp()}
          >
            <Image
              src="/images/plus-purple.png"
              width={28}
              height={28}
              alt="Top Up"
            />
            <span className="ml-2">Top Up</span>
          </Button>
        </div>
      </div>
      <Row className="mt-3">
        <Col className="col-md-7">
          <div className="charts p-4">
            <div className="d-flex justify-content-between">
              <div className="income">
                <div>
                  <Image
                    src="/images/arrow-up-green.png"
                    width={28}
                    height={28}
                    alt="Income"
                  />
                </div>
                <span>Income</span>
                <p className="mt-2">Rp2.120.000</p>
              </div>
              <div className="expense">
                <div>
                  <Image
                    src="/images/arrow-up-red.png"
                    width={28}
                    height={28}
                    alt="Income"
                  />
                </div>
                <span>Expense</span>
                <p className="mt-2">Rp1.560.000</p>
              </div>
            </div>
            <p className="text-center mt-5">+Rp65.000</p>
          </div>
        </Col>
        <Col className="col-md-5">
          <div className="history p-4">
            <div className="d-flex justify-content-between">
              <h2>Transaction History</h2>
              <Link href="/dashboard/history">
                <a className="mt-1">See all</a>
              </Link>
            </div>
            {history.map((item, index) => {
              return (
                <div
                  className="transaction d-flex justify-content-between align-items-center mt-4"
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
                    <div className="profile d-flex flex-column ml-2">
                      <span className="name">{`${item.fullName.substring(
                        0,
                        10
                      )}...`}</span>
                      <span className="type mt-1">{item.type}</span>
                    </div>
                  </div>
                  <p
                    className={`${
                      item.type === "Transfer" ? "expense" : "income"
                    } mt-3`}
                  >
                    {item.type === "Transfer"
                      ? `-Rp${item.amount}`
                      : `+Rp${item.amount}`}
                  </p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Col>
  );
}
