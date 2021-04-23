import { React, useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axiosApiInstance from "../../helpers/axios";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";
import Rupiah from "../../helpers/rupiah";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const [query, setQuery] = useState("");
  const [user, setUser] = useState([]);
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
    axiosApiInstance
      .get(`${Url}/users/?keyword=${event.target.value}&perPage=3`)
      .then((res) => {
        if (event.target.value === "") {
          getUser();
          setEmpty(false);
        }
        setUser(res.data.data);
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
      axiosApiInstance
        .post(`${Url}/transactions/details`, {
          idUser: id,
          idReceiver: idUser,
          amount: Number(result),
          balanceLeft: userCredit.credit - Number(result),
          notes: data.notes,
        })
        .then((res) => {
          const id = res.data.data[0].id;
          setShowResult(false);
          setAmount("");
          setData({
            notes: "",
          });
          setIdUser(null);
          Swal.fire({
            title: "Success!",
            text: res.data.message,
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
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        });
    }
  };

  const getUser = () => {
    axiosApiInstance
      .get(`${Url}/users?perPage=3`)
      .then((res) => {
        const data = res.data.data;
        setEmpty(false);
        setUser(data);
      })
      .catch((err) => {
        setEmpty(true);
      });
  };

  useEffect(() => {
    axiosApiInstance
      .get(`${Url}/users/find-one`)
      .then((res) => {
        const data = res.data.data[0];
        setUserCredit(data);
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
    getUser();
  }, []);

  return (
    <Col className="col-md-9">
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
              user.map((item, index) => {
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
