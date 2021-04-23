import { React, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import PinInput from "react-pin-input";
import Rupiah from "../../helpers/rupiah";
import Date from "../../helpers/date";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index(props) {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const [details, setDetails] = useState([]);
  const [data, setData] = useState({
    value: "",
  });
  const [status, setStatus] = useState(false);

  const handleFormChange = (value) => {
    setData({ value });
  };

  const handleComplete = () => {
    setStatus(true);
  };

  let onClear = useRef(null);

  const handleSubmit = (event) => {
    const id = localStorage.getItem("id");
    event.preventDefault();
    const pin = data.value;
    onClear.clear();
    axios
      .post(
        `${Url}/users/pin/check/${id}`,
        { pin: pin },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
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
            setData({
              value: "",
            });
            setStatus(false);
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
        setData({
          value: "",
        });
        setStatus(false);
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        });
      });
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
            <p className="mt-2">{Rupiah(Number(details.amount))}</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Balance Left</span>
            <p className="mt-2">{Rupiah(Number(details.balanceLeft))}</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Date & Time</span>
            {details.date !== undefined && (
              <p className="mt-2">{Date(details.date)}</p>
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
                  <Col className="col">
                    <PinInput
                      length={6}
                      focus
                      secret
                      type="numeric"
                      onChange={handleFormChange}
                      ref={(p) => (onClear = p)}
                      inputStyle={{
                        fontWeight: 700,
                        fontSize: "30px",
                        lineHeight: "41px",
                        textAlign: "center",
                        paddingBottom: "0px",
                        width: "53px",
                        height: "65px",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                        border: status
                          ? "1.5px solid #6379f4"
                          : "1px solid rgba(169, 169, 169, 0.6)",
                        boxSizing: "border-box",
                        boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
                        color: "#3a3d42",
                        marginRight: "17px",
                      }}
                      inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                      onComplete={() => handleComplete()}
                    />
                  </Col>
                </Row>
              </form>
            </div>
            <div className="modal-footer">
              <Button
                type="button"
                className={`btn btn-continue ${status ? "active" : ""}`}
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
