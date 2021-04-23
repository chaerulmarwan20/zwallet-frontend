import React from "react";
import Layout from "../../../components/base/Layout";
import Main from "../../../parts/TransactionsHistory";

export default function transactions() {
  return (
    <>
      <Layout title="History" className="history" active="dashboard">
        <Main></Main>
      </Layout>
    </>
  );
}
