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
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [limit, setLimit] = useState(5);
  const [empty, setEmpty] = useState(false);
  const [paginate, setPaginate] = useState(1);

  const handleClickSort = (params) => {
    setSort(params);
  };

  const handleClickOrder = (params) => {
    setOrder(params);
  };

  const handleClickLimit = (params) => {
    setLimit(params);
  };

  const handleClickPaginate = (params) => {
    setPage(params);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(
        `${Url}/transactions/${id}?order=${order}&sortBy=${sort}&page=${page}&perPage=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.data;
        setCurrentPage(res.data.currentPage);
        setTotalPage(res.data.totalPage);
        setPaginate(res.data.totalPage < 6 ? res.data.totalPage : 5);
        setHistory(data);
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, [order, sort, page, limit]);

  return (
    <Col className="col-md-9">
      <div className="transaction p-5">
        <h1>Transaction History</h1>
        {/* <p className="time mt-3">This Week</p> */}
        {empty === true && (
          <p className="empty text-center mt-5">You have no transactions</p>
        )}
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
        {empty === false && (
          <>
            <div className="d-flex justify-content-center mt-4">
              <ul className="pagination-custom">
                {Array.from(Array(paginate).keys()).map((data, index) => {
                  return (
                    <li key={index}>
                      <Button
                        className={`${
                          currentPage >= 5 && currentPage < totalPage
                            ? data + (currentPage - 3) === currentPage &&
                              "page-active"
                            : currentPage >= 5 && currentPage === totalPage
                            ? data + (currentPage - 3) - 1 === currentPage &&
                              "page-active"
                            : data + 1 === currentPage && "page-active"
                        }`}
                        onClick={() =>
                          handleClickPaginate(
                            `${
                              currentPage >= 5 && currentPage < totalPage
                                ? data + (currentPage - 3)
                                : currentPage >= 5 && currentPage === totalPage
                                ? data + (currentPage - 3) - 1
                                : data + 1
                            }`
                          )
                        }
                      >
                        {currentPage >= 5 && currentPage < totalPage
                          ? data + (currentPage - 3)
                          : currentPage >= 5 && currentPage === totalPage
                          ? data + (currentPage - 3) - 1
                          : data + 1}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Button
                type="button"
                className={`btn btn-order mr-3 d-flex justify-content-center align-items-center ${
                  order === "ASC" ? "active" : ""
                }`}
                onClick={() => handleClickOrder("ASC")}
              >
                <Image
                  src={`${
                    order === "ASC"
                      ? "/images/arrow-left-white-2.png"
                      : "/images/arrow-left-red.png"
                  }`}
                  width={30}
                  height={30}
                  alt="Order"
                />
              </Button>
              <Button
                type="button"
                className={`btn btn-order mr-3 d-flex justify-content-center align-items-center ${
                  order === "DESC" ? "active" : ""
                }`}
                onClick={() => handleClickOrder("DESC")}
              >
                <Image
                  src={`${
                    order === "DESC"
                      ? "/images/arrow-left-white.png"
                      : "/images/arrow-left-green.png"
                  }`}
                  width={30}
                  height={30}
                  alt="Order"
                />
              </Button>
              <div className="dropdown mr-3">
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
                  <p
                    className="dropdown-item"
                    onClick={() => handleClickSort("fullName")}
                  >
                    Full Name
                  </p>
                  <p
                    className="dropdown-item"
                    onClick={() => handleClickSort("amount")}
                  >
                    Amount
                  </p>
                  <p
                    className="dropdown-item"
                    onClick={() => handleClickSort("type")}
                  >
                    Type
                  </p>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-filter dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Limit {limit}
                </button>
                <div className="dropdown-menu">
                  <p
                    className="dropdown-item"
                    onClick={() => handleClickLimit(5)}
                  >
                    5
                  </p>
                  <p
                    className="dropdown-item"
                    onClick={() => handleClickLimit(10)}
                  >
                    10
                  </p>
                  <p
                    className="dropdown-item"
                    onClick={() => handleClickLimit(15)}
                  >
                    15
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}
