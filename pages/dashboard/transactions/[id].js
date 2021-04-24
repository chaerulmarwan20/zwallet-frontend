import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Rupiah from "../../../helpers/rupiah";
import Date from "../../../helpers/date";
import Layout from "../../../components/base/Layout";
import Col from "../../../components/module/Col";
import Button from "../../../components/module/Button";

export default function index({ details }) {
  const UrlImage = process.env.image;

  const router = useRouter();

  const handleClickHome = () => {
    router.push("/dashboard/transactions");
  };

  if (router.isFallback) {
    return (
      <Layout title="History" className="status" active="dashboard">
        <Col className="col-md-9">
          <div className="transfer d-flex flex-column justify-content-between p-5">
            <div className="failed d-flex flex-column justify-content-around align-items-center">
              <h1 className="transfer-status mt-5">Please wait...</h1>
              <div className="spinner-border text-primary mt-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </Col>
      </Layout>
    );
  }

  return details === null ? (
    <Layout title="History" className="status" active="dashboard">
      <Col className="col-md-9">
        <div className="transfer d-flex flex-column justify-content-between p-5">
          <div className="failed text-center">
            <Image
              src="/images/failed.png"
              width={70}
              height={70}
              alt="Failed"
            />
            <h1 className="transfer-status mt-4">Transactions not found</h1>
            <p className="text-center mt-4">
              We could not find the transaction data you requested, we recommend
              that you check <br /> that the data you requested is correct and
              try again.
            </p>
          </div>
          <div className="d-flex justify-content-end button-container">
            <Button
              type="button"
              className="btn btn-back-details"
              onClick={() => handleClickHome()}
            >
              Back
            </Button>
          </div>
        </div>
      </Col>
    </Layout>
  ) : (
    <Layout title="History" className="status" active="dashboard">
      <Col className="col-md-9">
        <div className="transfer p-5">
          <div className="success text-center">
            <Image
              src="/images/success.png"
              width={70}
              height={70}
              alt="Success"
            />
            <h1 className="transfer-status mt-3">{`${details.type} Success`}</h1>
          </div>
          {details.type === "Top Up" && (
            <div className="details py-3 pl-3 mt-5">
              <span>Payment Method</span>
              <p className="mt-2">{details.fullName}</p>
            </div>
          )}
          <div className="details py-3 pl-3 mt-3">
            <span>Amount</span>
            <p className="mt-2">{Rupiah(Number(details.amount))}</p>
          </div>
          <div className="details py-3 pl-3 mt-3">
            <span>Date & Time</span>
            {details.date !== undefined && (
              <p className="mt-2">{Date(details.date)}</p>
            )}
          </div>
          {details.type !== "Top Up" && (
            <div className="details py-3 pl-3 mt-3">
              <span>Notes</span>
              <p className="mt-2">{details.notes}</p>
            </div>
          )}
          <h1 className="mt-4">{`${
            details.type === "Top Up"
              ? "Top Up From"
              : details.type === "Transfer"
              ? "Transfer To"
              : `Transfered From`
          }`}</h1>
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
              {details.type !== "Top Up" && (
                <span className="number mt-1">{details.phoneNumber}</span>
              )}
            </div>
          </div>
        </div>
      </Col>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const Url = process.env.api;
  try {
    const id = ctx.params.id;
    const result = await axios.get(`${Url}/transactions/details/users/${id}`);
    const data = result.data.data[0];
    return {
      props: {
        details: data,
      },
    };
  } catch (err) {
    return {
      props: {
        details: null,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const Url = process.env.api;
  const result = await axios.get(`${Url}/transactions/details/users/`);
  const data = result.data.data;
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    fallback: true,
    paths: paths,
  };
};
