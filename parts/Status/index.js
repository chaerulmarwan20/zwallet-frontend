import { React, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";
import Swal from "sweetalert2";
import { getDetail } from "../../configs/redux/actions/transaction";
import Rupiah from "../../helpers/rupiah";
import Date from "../../helpers/date";
import { Pdf } from "./Pdf";
import Col from "../../components/module/Col";
import Button from "../../components/module/Button";

export default function index(props) {
  const UrlImage = process.env.image;

  const router = useRouter();

  const dispatch = useDispatch();

  const componentRef = useRef();

  const { detail } = useSelector((state) => state.transaction);
  const [showFailed, setShowFailed] = useState(false);

  const handleClickHome = () => {
    router.push("/dashboard");
  };

  const handleClickShare = () => {
    Swal.fire({
      icon: "info",
      title: "This feature is coming soon",
      confirmButtonColor: "#6379F4",
    });
  };

  useEffect(() => {
    if (props.id !== undefined) {
      dispatch(getDetail(props.id))
        .then((res) => {})
        .catch((err) => {
          if (err.message !== "Invalid signature") {
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
    <Col className="col-md-9">
      <div className="transfer p-5">
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
        <Pdf
          ref={componentRef}
          amount={Rupiah(Number(detail.amount))}
          balanceLeft={Rupiah(Number(detail.balanceLeft))}
          date={Date(detail.date)}
          notes={detail.notes}
          image={`${UrlImage}${detail.image}`}
          fullName={detail.fullName}
          phoneNumber={detail.phoneNumber}
        />
        <div className="d-flex justify-content-end button-container">
          <Button
            type="button"
            className="btn btn-share d-flex justify-content-center align-items-center mr-3"
            onClick={() => handleClickShare()}
          >
            <Image src="/images/share.png" width={24} height={24} alt="Share" />
          </Button>
          <ReactToPrint
            trigger={() => (
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
            )}
            content={() => componentRef.current}
          />
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
