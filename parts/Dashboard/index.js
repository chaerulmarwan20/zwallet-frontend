import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axiosApiInstance from "../../helpers/axios";
import Swal from "sweetalert2";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import Rupiah from "../../helpers/rupiah";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [user, setUser] = useState([]);
  const [history, setHistory] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  const router = useRouter();

  const handleClickTransfer = () => {
    router.push("/transfer");
  };

  const handleClickTopUp = () => {
    router.push("/topup");
  };

  useEffect(() => {
    axiosApiInstance
      .get(`${Url}/users/find-one`)
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
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/${id}?order=DESC`)
      .then((res) => {
        const data = res.data.data;
        setHistory(data);
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/income/${id}`)
      .then((res) => {
        const data = res.data.data[0];
        setIncome(data);
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
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
    axiosApiInstance
      .get(`${Url}/transactions/expense/${id}`)
      .then((res) => {
        const data = res.data.data[0];
        setExpense(data);
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
  }, []);

  return (
    <Col className="col-md-9">
      <div className="balance p-4 d-flex justify-content-between">
        <div className="info">
          <p>Balance</p>
          <h1>{Rupiah(Number(user.credit))}</h1>
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
                <p className="mt-2">{Rupiah(Number(income.income))}</p>
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
                <p className="mt-2">{Rupiah(Number(expense.expense))}</p>
              </div>
            </div>
            {history[0] !== undefined && (
              <p
                className={`text-center mt-4 ${
                  history[0].type === "Transfer" ? "expense" : "income"
                }`}
              >
                {" "}
                {history[0].type === "Transfer"
                  ? `-${Rupiah(Number(history[0].amount))}`
                  : history[0].type === "Receive"
                  ? `+${Rupiah(Number(history[0].amount))}`
                  : `+${Rupiah(Number(history[0].amount))}`}
              </p>
            )}
            <div className="mt-3">
              <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={40} data={data}>
                  <Bar dataKey="uv">
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill="#8884d8"
                        key={`cell-${index}`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
        <Col className="col-md-5">
          <div className="history p-4">
            <div className="d-flex justify-content-between">
              <h2>Transaction History</h2>
              <Link href="/dashboard/transactions">
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
                      {item.fullName.length > 10 ? (
                        <span className="name">{`${item.fullName.substring(
                          0,
                          10
                        )}...`}</span>
                      ) : (
                        <span className="name">{item.fullName}</span>
                      )}
                      <span className="type mt-1">{item.type}</span>
                    </div>
                  </div>
                  <p
                    className={`${
                      item.type === "Transfer" ? "expense" : "income"
                    } mt-3`}
                  >
                    {item.type === "Transfer"
                      ? `-${Rupiah(Number(item.amount))}`
                      : item.type === "Receive"
                      ? `+${Rupiah(Number(item.amount))}`
                      : `+${Rupiah(Number(item.amount))}`}
                  </p>
                </div>
              );
            })}
            {empty === true && (
              <p className="empty text-center mt-3">
                You don't have any transactions.
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Col>
  );
}
