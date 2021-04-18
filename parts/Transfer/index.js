import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const [query, setQuery] = useState("");
  const [result, setResult] = useState(false);
  const [user, setUser] = useState([]);
  const [userCredit, setUserCredit] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [receiver, setReceiver] = useState({
    image: "",
    name: "",
    number: "",
  });
  const [data, setData] = useState({
    amount: "",
    balanceLeft: "",
    notes: "",
  });
  const [idUser, setIdUser] = useState(null);

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
    if (data.amount > userCredit.credit) {
      Swal.fire({
        title: "Error!",
        text: "Your balance is not enough",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379F4",
      });
    } else {
      const id = localStorage.getItem("id");
      axios
        .post(
          `${Url}/transactions/details`,
          {
            idUser: id,
            idReceiver: idUser,
            amount: data.amount,
            balanceLeft: userCredit.credit - data.amount,
            notes: data.notes,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          const id = res.data.data[0].id;
          setShowResult(false);
          setData({
            amount: "",
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

  useEffect(() => {
    axios
      .get(`${Url}/users/find-one`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data.data[0];
        setUserCredit(data);
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
            {result === true &&
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
                <Input
                  type="text"
                  className={`amount ${data.amount !== "" ? "active" : ""}`}
                  name="amount"
                  placeholder="0.00"
                  onChange={handleFormChangeTransfer}
                />
              </div>
            </form>
            <p className="credit text-center mt-4">
              Rp{userCredit.credit} Available
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
