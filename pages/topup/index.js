import React from "react";
import axios from "axios";
import Layout from "../../components/base/Layout";
import Main from "../../parts/Topup";

export default function Topup({ payments }) {
  return (
    <>
      <Layout title="Top Up" className="top-up" active="topup">
        <Main payment={payments}></Main>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const result = await axios.get(
    "http://localhost:8080/api/v1/transactions/payments?perPage=8"
  );
  const data = result.data.data;
  return {
    props: {
      payments: data,
    },
  };
};
