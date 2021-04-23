import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axiosApiInstance from "../../helpers/axios";
import Swal from "sweetalert2";
import Rupiah from "../../helpers/rupiah";
import Date from "../../helpers/date";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index(props) {
  const Url = process.env.api;
  const UrlImage = process.env.image;

  const router = useRouter();

  const [details, setDetails] = useState([]);
  const [showFailed, setShowFailed] = useState(false);

  const handleClickHome = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    if (props.id !== undefined) {
      axiosApiInstance
        .get(`${Url}/transactions/details/${props.id}`)
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
    <Col className="col-md-9">
      <div className="transfer p-5">
        <div className="success text-center">
          <Image
            src="/images/success.png"
            width={70}
            height={70}
            alt="Success"
          />
          <h1 className="transfer-status mt-3">Transfer Success</h1>
        </div>
        {showFailed === true && (
          <div className="failed text-center">
            <Image
              src="/images/failed.png"
              width={70}
              height={70}
              alt="Failed"
            />
            <h1 className="transfer-status mt-3">Transfer Failed</h1>
            <p className="text-center mt-2">
              We can’t transfer your money at the moment, we recommend you to
              check your <br /> internet connection and try again.
            </p>
          </div>
        )}
        <div className="details py-3 pl-3 mt-5">
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
        <h1 className="mt-4">Transfer To</h1>
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
        <div className="d-flex justify-content-end button-container">
          <Button
            type="button"
            className="btn btn-share d-flex justify-content-center align-items-center mr-3"
          >
            <Image src="/images/share.png" width={24} height={24} alt="Share" />
          </Button>
          <Button
            type="button"
            className="btn btn-download d-flex justify-content-center align-items-center mr-3"
          >
            <Image
              src="/images/download-2.png"
              width={22}
              height={22}
              alt="Download"
            />
            <span className="ml-2">Download PDF</span>
          </Button>
          <Button
            type="button"
            className="btn btn-back"
            onClick={() => handleClickHome()}
          >
            Back to Home
          </Button>
          {showFailed === true && (
            <Button type="button" className="btn btn-try">
              Try Again
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
}
