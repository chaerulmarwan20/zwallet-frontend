import React from "react";
import Layout from "../../components/base/Layout";
import Main from "../../parts/History";

export default function history() {
  return (
    <>
      <Layout title="History" className="history" active="dashboard">
        <Main></Main>
      </Layout>
    </>
  );
}
