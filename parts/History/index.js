import { React, useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index() {
  const UrlImage = process.env.image;

  const dispatch = useDispatch();

  const { history } = useSelector((state) => state.transaction);

  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("id");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [limit, setLimit] = useState(5);
  const [empty, setEmpty] = useState(false);
  const [paginate, setPaginate] = useState(1);

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const handleClickOrder = (params) => {
    setOrder(params);
  };

  const handleChangeLimit = (event) => {
    if (page > 1) {
      setPage(1);
    }
    setLimit(event.target.value);
  };

  const handleClickPaginate = (params) => {
    setPage(params);
  };

  useEffect(() => {
    dispatch(getHistory(order, sort, page, limit))
      .then(({ currentPage, totalPage }) => {
        setCurrentPage(currentPage);
        setTotalPage(totalPage);
        setPaginate(totalPage < 6 ? totalPage : 5);
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, [order, sort, page, limit]);

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="transaction p-5">
        <h1>Transaction History</h1>
        {/* <p className="time mt-3">This Week</p> */}
        {empty === true && (
          <p className="empty text-center mt-5">
            You don't have any transactions.
          </p>
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
                    ? `-${Rupiah(Number(item.amount))}`
                    : item.type === "Receive"
                    ? `+${Rupiah(Number(item.amount))}`
                    : `+${Rupiah(Number(item.amount))}`}
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
            <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-center mt-3">
              <div className="btn-container d-flex">
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
              </div>
              <div className="select-container d-flex flex-column flex-md-row mt-3 mt-md-0">
                <select
                  className="custom-select mr-3"
                  onChange={handleChangeSort}
                >
                  <option value="id">Sort by id</option>
                  <option value="fullName">Sort by name</option>
                  <option value="amount">Sort by amount</option>
                  <option value="type">Sort by type</option>
                </select>
                <select
                  className="custom-select mt-3 mt-md-0"
                  onChange={handleChangeLimit}
                >
                  <option value="5">Limit 5</option>
                  <option value="10">Limit 10</option>
                  <option value="15">Limit 15</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}
