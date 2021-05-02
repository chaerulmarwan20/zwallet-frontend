import { React, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import PinInput from "react-pin-input";
import Swal from "sweetalert2";
import {
  getDetail,
  checkPin,
  createTransaction,
} from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Date from "../../helpers/date";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index(props) {
  const UrlImage = process.env.image;

  const router = useRouter();

  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state.transaction);

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
  let onClean = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const pin = data.value;
    onClear.clear();
    onClean.clear();
    dispatch(checkPin(pin))
      .then((res) => {
        dispatch(
          createTransaction(
            detail.idUser,
            detail.idReceiver,
            detail.amount,
            detail.notes
          )
        )
          .then((res) => {
            router.push(`/transfer/status/${detail.id}`);
          })
          .catch((err) => {
            setData({
              value: "",
            });
            setStatus(false);
            Swal.fire({
              title: "Error!",
              text: err.message,
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
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        });
      });
  };

  useEffect(() => {
    if (props.id !== undefined) {
      dispatch(getDetail(props.id))
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
    }
  }, [props.id]);

  return (
    <>
      <Col className="col-lg-8 col-xl-9">
        <div className="transfer p-5">
          <h1>Transfer To</h1>
          <div className="users d-flex align-items-center py-3 pl-3 mt-4">
            <div className="image">
              {detail.image !== undefined && (
                <img
                  src={`${UrlImage}${detail.image}`}
                  width={70}
                  height={70}
                  alt="User"
                  className="user"
                />
              )}
            </div>
            <div className="profile d-flex flex-column ml-3 pr-1">
              <span className="name">{detail.fullName}</span>
              <span className="number mt-1">{detail.phoneNumber}</span>
            </div>
          </div>
          <h1 className="mt-4">Details</h1>
          <div className="details pt-3 pb-1 pl-3 mt-3">
            <span>Amount</span>
            <p className="mt-2">{Rupiah(Number(detail.amount))}</p>
          </div>
          <div className="details pt-3 pb-1 pl-3 mt-3">
            <span>Balance Left</span>
            <p className="mt-2">{Rupiah(Number(detail.balanceLeft))}</p>
          </div>
          <div className="details pt-3 pb-1 pl-3 mt-3">
            <span>Date & Time</span>
            {detail.date !== undefined && (
              <p className="mt-2">{Date(detail.date)}</p>
            )}
          </div>
          <div className="details pt-3 pb-1 pl-3 mt-3">
            <span>Notes</span>
            <p className="mt-2">{detail.notes}</p>
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
                Enter your 6 digits PIN for confirmation to
                <br className="d-none d-md-block" /> continue transferring
                money.
              </p>
              <form className="mt-5">
                <Row>
                  <Col className="col d-none d-md-block input-pin">
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
                  <Col className="col d-md-none d-flex justify-content-center input-pin">
                    <PinInput
                      length={6}
                      focus
                      secret
                      type="numeric"
                      onChange={handleFormChange}
                      ref={(p) => (onClean = p)}
                      inputStyle={{
                        fontWeight: 700,
                        fontSize: "20px",
                        lineHeight: "31px",
                        textAlign: "center",
                        paddingBottom: "0px",
                        width: "40px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#ffffff",
                        border: status
                          ? "1.5px solid #6379f4"
                          : "1px solid rgba(169, 169, 169, 0.6)",
                        boxSizing: "border-box",
                        boxShadow: "0px 10px 75px rgba(147, 147, 147, 0.1)",
                        color: "#3a3d42",
                        marginRight: "6px",
                      }}
                      inputFocusStyle={{ border: "1.5px solid #6379f4" }}
                      onComplete={() => handleComplete()}
                    />
                  </Col>
                </Row>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center justify-content-md-end">
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
