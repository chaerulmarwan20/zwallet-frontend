import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index(props) {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const [details, setDetails] = useState([]);
  const [data, setData] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    const id = localStorage.getItem("id");
    event.preventDefault();
    const number = `${data.one}${data.two}${data.three}${data.four}${data.five}${data.six}`;
    axios
      .post(
        `${Url}/users/pin/check/${id}`,
        { pin: number },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setData({
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
        });
        axios
          .post(
            `${Url}/transactions/`,
            {
              idUser: details.idUser,
              idReceiver: details.idReceiver,
              amount: details.amount,
              notes: details.notes,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            router.push(`/transfer/status/${details.id}`);
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
  };

  const setDate = (params) => {
    const date = new Date(params);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${
      month[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()} - ${date.getHours()}.${date.getMinutes()}`;
  };

  useEffect(() => {
    if (props.id !== undefined) {
      axios
        .get(`${Url}/transactions/details/${props.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          const data = res.data.data[0];
          setDetails(data);
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
  }, [props.id]);

  return (
    <>
      <Col className="col-md-9">
        <div className="transfer p-5">
          <h1>Transfer To</h1>
          <div className="users d-flex align-items-center py-2 pl-3 mt-4">
            <div className="image">
              {details.image !== undefined && (
                <img
                  src={`${UrlImage}${details.image}`}
                  width={70}
                  height={70}
                  alt="User"
                  className="user"
                />
              )}
            </div>
            <div className="profile d-flex flex-column ml-3">
              <span className="name">{details.fullName}</span>
              <span className="number mt-1">{details.phoneNumber}</span>
            </div>
          </div>
          <h1 className="mt-4">Details</h1>
          <div className="details py-3 pl-3 mt-3">
            <span>Amount</span>
            <p className="mt-2">Rp{details.amount}</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Balance Left</span>
            <p className="mt-2">Rp{details.balanceLeft}</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Date & Time</span>
            {details.date !== undefined && (
              <p className="mt-2">{setDate(details.date)}</p>
            )}
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Notes</span>
            <p className="mt-2">{details.notes}</p>
          </div>
          <div className="d-flex justify-content-end">
            <Button type="button" className="btn btn-continue" isModal>
              Continue
            </Button>
          </div>
        </div>
      </Col>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter PIN to Transfer
              </h5>
              <Button type="button" className="close" isDismiss>
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body">
              <p>
                Enter your 6 digits PIN for confirmation to <br /> continue
                transferring money.
              </p>
              <form className="mt-5">
                <Row>
                  <Col className="col-md-2">
                    <Input
                      type="text"
                      name="one"
                      className={`pin ${data.one !== "" ? "active" : ""}`}
                      value={data.one}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-md-2">
                    <Input
                      type="text"
                      name="two"
                      className={`pin ${data.two !== "" ? "active" : ""}`}
                      value={data.two}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-md-2">
                    <Input
                      type="text"
                      name="three"
                      className={`pin ${data.three !== "" ? "active" : ""}`}
                      value={data.three}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-md-2">
                    <Input
                      type="text"
                      name="four"
                      className={`pin ${data.four !== "" ? "active" : ""}`}
                      value={data.four}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-md-2">
                    <Input
                      type="text"
                      name="five"
                      className={`pin ${data.five !== "" ? "active" : ""}`}
                      value={data.five}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                  <Col className="col-md-2">
                    <Input
                      type="text"
                      name="six"
                      className={`pin ${data.six !== "" ? "active" : ""}`}
                      value={data.six}
                      onChange={handleFormChange}
                      isMax
                    />
                  </Col>
                </Row>
              </form>
            </div>
            <div className="modal-footer">
              <Button
                type="button"
                className={`btn btn-continue ${
                  data.one !== "" &&
                  data.two !== "" &&
                  data.three !== "" &&
                  data.four !== "" &&
                  data.five !== "" &&
                  data.six !== ""
                    ? "active"
                    : ""
                }`}
                onClick={handleSubmit}
                isDismiss
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
