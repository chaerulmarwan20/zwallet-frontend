import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BarChart, Bar } from "recharts";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const router = useRouter();

  const handleClickTransfer = () => {
    router.push("/transfer");
  };

  const handleClickTopUp = () => {
    router.push("/topup");
  };

  const data = [
    {
      name: "Sat",
      income: 4000,
    },
    {
      name: "Sun",
      income: 3000,
    },
    {
      name: "Mon",
      income: 2000,
    },
    {
      name: "Tue",
      income: 2780,
    },
    {
      name: "Wed",
      income: 1890,
    },
    {
      name: "Thu",
      income: 2390,
    },
    {
      name: "Fri",
      income: 3490,
    },
  ];

  return (
    <section className="dashboard">
      <Container>
        <Row>
          <Col className="col-md-3">
            <div className="sidebar d-flex flex-column justify-content-between p-5">
              <div className="main-menu d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center active">
                  <Image
                    src="/images/grid-blue.png"
                    width={28}
                    height={28}
                    alt="Dashboard"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Dashboard</a>
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
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/user-grey.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4">Profile</a>
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
            <div className="balance p-4 d-flex justify-content-between">
              <div className="info">
                <p>Balance</p>
                <h1>Rp120.000</h1>
                <span>+62 813-9387-7946</span>
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
                  <div className="d-flex justify-content-center">
                    <BarChart width={150} height={220} data={data} barGap={50}>
                      <Bar dataKey="income" fill="#6379F4" radius={15} />
                    </BarChart>
                  </div>
                  <div className="d-flex justify-content-center">
                    <span className="day">Sat</span>
                    <span className="day">Sun</span>
                    <span className="day">Mon</span>
                    <span className="day">Tue</span>
                    <span className="day">Wed</span>
                    <span className="day">Thu</span>
                    <span className="day">Fri</span>
                  </div>
                </div>
              </Col>
              <Col className="col-md-5">
                <div className="history p-4">
                  <div className="d-flex justify-content-between">
                    <h2>Transaction History</h2>
                    <Link href="/history">
                      <a className="mt-1">See all</a>
                    </Link>
                  </div>
                  <div className="transaction d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/suhi.png"
                        width={56}
                        height={56}
                        alt="User"
                      />
                      <div className="profile d-flex flex-column ml-2">
                        <span className="name">Samuel Suhi</span>
                        <span className="type mt-1">Transfer</span>
                      </div>
                    </div>
                    <p className="income mt-3">+Rp50.000</p>
                  </div>
                  <div className="transaction d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/netflix.png"
                        width={56}
                        height={56}
                        alt="Netflix"
                      />
                      <div className="profile d-flex flex-column ml-2">
                        <span className="name">Netflix</span>
                        <span className="type mt-1">Subscription</span>
                      </div>
                    </div>
                    <p className="expense mt-3">-Rp149.000</p>
                  </div>
                  <div className="transaction d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/christine.png"
                        width={56}
                        height={56}
                        alt="User"
                      />
                      <div className="profile d-flex flex-column ml-2">
                        <span className="name">Christine Mar...</span>
                        <span className="type mt-1">Transfer</span>
                      </div>
                    </div>
                    <p className="income mt-3">+Rp150.000</p>
                  </div>
                  <div className="transaction d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <Image
                        src="/images/adobe.png"
                        width={56}
                        height={56}
                        alt="Adobe"
                      />
                      <div className="profile d-flex flex-column ml-2">
                        <span className="name">Adobe Inc.</span>
                        <span className="type mt-1">Subscription</span>
                      </div>
                    </div>
                    <p className="expense mt-3">-Rp249.000</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
