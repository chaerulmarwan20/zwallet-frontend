import { React, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import { findUser } from "../../configs/redux/actions/user";
import {
  getTransaction,
  getIncome,
  getExpense,
} from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const UrlImage = process.env.image;

  const router = useRouter();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { transaction, income, expense } = useSelector(
    (state) => state.transaction
  );

  const [empty, setEmpty] = useState(false);
  const [chart, setChart] = useState({
    data: [
      {
        name: "Sat",
        income: 4000,
        expense: 2400,
      },
      {
        name: "Sun",
        income: 3000,
        expense: 1398,
      },
      {
        name: "Mon",
        income: 2000,
        expense: 9800,
      },
      {
        name: "Tue",
        income: 2780,
        expense: 3908,
      },
      {
        name: "Wed",
        income: 1890,
        expense: 4800,
      },
      {
        name: "Thu",
        income: 2390,
        expense: 3800,
      },
      {
        name: "Fri",
        income: 3490,
        expense: 4300,
      },
    ],
    activeIndex: 0,
  });

  const handleClickChart = (data, index) => {
    Swal.fire({
      icon: "info",
      title: "This feature is coming soon",
      confirmButtonColor: "#6379F4",
    });
    // setChart({
    //   data: data,
    //   activeIndex: index,
    // });
  };

  const { activeIndex, data } = chart;
  const activeItem = data[activeIndex];

  const handleClickTransfer = () => {
    router.push("/transfer");
  };

  const handleClickTopUp = () => {
    router.push("/topup");
  };

  useEffect(() => {
    dispatch(findUser())
      .then((res) => {})
      .catch((err) => {
        if (
          err.message !== "Token is expired" &&
          err.message !== "Token is not active" &&
          err.message !== "Invalid signature"
        ) {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  }, []);

  useEffect(() => {
    dispatch(getTransaction())
      .then((res) => {
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, []);

  useEffect(() => {
    dispatch(getIncome())
      .then((res) => {})
      .catch((err) => {
        if (
          err.message !== "Token is expired" &&
          err.message !== "Token is not active" &&
          err.message !== "Invalid signature"
        ) {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  }, []);

  useEffect(() => {
    dispatch(getExpense())
      .then((res) => {})
      .catch((err) => {
        if (
          err.message !== "Token is expired" &&
          err.message !== "Token is not active" &&
          err.message !== "Invalid signature"
        ) {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  }, []);

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="balance p-4 d-flex flex-column flex-md-row justify-content-md-between">
        <div className="info">
          <p>Balance</p>
          <h1>{Rupiah(Number(user.credit))}</h1>
          <span>
            {user.phoneNumber === "000000000000"
              ? "your phone number"
              : user.phoneNumber}
          </span>
        </div>
        <div className="button-container mt-3 mt-md-0 d-flex d-md-block">
          <Button
            type="button"
            className="btn btn-balance d-flex justify-content-center align-items-center mr-3 mr-md-0"
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
            className="btn btn-balance d-flex justify-content-center align-items-center mt-0 mt-md-3"
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
      <Row className="mt-4 mt-xl-3">
        <Col className="col-12 col-xl-7">
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
            {transaction[0] !== undefined && (
              <p
                className={`text-center mt-4 ${
                  transaction[0].type === "Transfer" ? "expense" : "income"
                }`}
              >
                {" "}
                {transaction[0].type === "Transfer"
                  ? `-${Rupiah(Number(transaction[0].amount))}`
                  : transaction[0].type === "Receive"
                  ? `+${Rupiah(Number(transaction[0].amount))}`
                  : `+${Rupiah(Number(transaction[0].amount))}`}
              </p>
            )}
            <div className="mt-5" style={{ width: "100%" }}>
              <p>Click each rectangle to see its daily income and expense</p>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={40} data={data}>
                  <Bar dataKey="income">
                    {data.map((entry, index) => (
                      <Cell
                        cursor="pointer"
                        fill={index === activeIndex ? "#1ec15f" : "#6379F4"}
                        key={`cell-${index}`}
                        onClick={() => handleClickChart(data, index)}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              {/* <div className="d-flex justify-content-between mt-3">
                <p className="content">{`Income of "${
                  activeItem.name
                }": ${Rupiah(activeItem.income)}`}</p>
                <p className="content">{`Expense of "${
                  activeItem.name
                }": ${Rupiah(activeItem.expense)}`}</p>
              </div> */}
            </div>
          </div>
        </Col>
        <Col className="col-12 col-xl-5 mt-4 mt-xl-0">
          <div className="history p-4">
            <div className="d-flex justify-content-between">
              <h2>Transaction History</h2>
              <Link href="/dashboard/transactions">
                <a className="mt-1">See all</a>
              </Link>
            </div>
            {transaction.map((item, index) => {
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
