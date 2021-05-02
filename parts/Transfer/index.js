import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import Swal from "sweetalert2";
import {
  findUser,
  getUser,
  searchUser,
} from "../../configs/redux/actions/user";
import { createDetail } from "../../configs/redux/actions/transaction";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";
import Rupiah from "../../helpers/rupiah";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const dispatch = useDispatch();

  const { userTarget } = useSelector((state) => state.user);

  const [query, setQuery] = useState("");
  const [empty, setEmpty] = useState(false);
  const [userCredit, setUserCredit] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [receiver, setReceiver] = useState({
    image: "",
    name: "",
    number: "",
  });
  const [data, setData] = useState({
    balanceLeft: "",
    notes: "",
  });
  const [amount, setAmount] = useState("");
  const [idUser, setIdUser] = useState(null);

  const handleFormChange = (event) => {
    setQuery(event.target.value);
    dispatch(searchUser(event.target.value))
      .then((res) => {
        if (event.target.value === "") {
          dispatch(getUser())
            .then((res) => {
              setEmpty(false);
            })
            .catch((err) => {
              setEmpty(true);
            });
          setEmpty(false);
        }
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  };

  const handleFormChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleFormChangeTransfer = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleClickUsers = (id, image, name, number) => {
    setShowResult(true);
    setIdUser(id);
    setReceiver({
      image: image,
      name: name,
      number: number,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const slice = amount.slice(2);
    let number = 0;
    Array.from(slice).forEach((item) => {
      if (item !== ",") {
        number += item;
      }
    });
    const result = number.slice(1);
    if (Number(result) > userCredit.credit) {
      Swal.fire({
        title: "Error!",
        text: "Your balance is not enough",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379F4",
      });
    } else {
      const id = localStorage.getItem("id");
      dispatch(
        createDetail(
          id,
          idUser,
          Number(result),
          userCredit.credit - Number(result),
          data.notes
        )
      )
        .then(({ id, message }) => {
          setShowResult(false);
          setAmount("");
          setData({
            notes: "",
          });
          setIdUser(null);
          Swal.fire({
            title: "Success!",
            text: message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push(`/transfer/confirmation/${id}`);
            } else {
              router.push(`/transfer/confirmation/${id}`);
            }
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        });
    }
  };

  useEffect(() => {
    dispatch(findUser())
      .then((res) => {
        setUserCredit(res);
      })
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
    dispatch(getUser())
      .then((res) => {
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, []);

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="search-receiver p-5">
        {showResult === false && (
          <>
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
            {empty === false &&
              userTarget.map((item, index) => {
                return (
                  <div
                    className="users d-flex align-items-center py-2 pl-3 mt-4"
                    key={index}
                    onClick={() =>
                      handleClickUsers(
                        item.id,
                        item.image,
                        item.fullName,
                        item.phoneNumber
                      )
                    }
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
            {empty === true && (
              <p className="empty text-center mt-5">Receiver not found</p>
            )}
          </>
        )}

        {showResult === true && (
          <>
            <h1>Transfer Money</h1>
            <div className="users-result d-flex align-items-center py-2 pl-3 mt-4">
              <div className="image">
                <img
                  src={`${UrlImage}${receiver.image}`}
                  width={70}
                  height={70}
                  alt="User"
                  className="user"
                />
              </div>
              <div className="profile d-flex flex-column ml-3">
                <span className="name">{receiver.name}</span>
                <span className="number mt-1">{receiver.number}</span>
              </div>
            </div>
            <p className="mt-4">
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
            <form className="mt-5">
              <div className="form-group">
                <NumberFormat
                  name="amount"
                  thousandSeparator={true}
                  prefix={"Rp"}
                  placeholder="00.0"
                  onChange={handleFormChangeAmount}
                  className={`form-control amount ${
                    amount !== "" ? "active" : ""
                  }`}
                />
              </div>
            </form>
            <p className="credit text-center mt-4">
              {Rupiah(Number(userCredit.credit))} Available
            </p>
            <div className="d-flex justify-content-center">
              <form className="mt-5">
                <div className="form-group pencil">
                  <img
                    src={`${
                      data.notes !== ""
                        ? "/images/pencil-blue.png"
                        : "/images/pencil.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Pencil"
                    className="pencil-img"
                  />
                  <Input
                    type="text"
                    className={`notes ${data.notes !== "" ? "active" : ""}`}
                    name="notes"
                    placeholder="Add some notes"
                    onChange={handleFormChangeTransfer}
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-end">
              <Button
                type="button"
                className={`btn btn-continue ${
                  data.amount !== "" && data.notes !== "" ? "active" : ""
                }`}
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}
