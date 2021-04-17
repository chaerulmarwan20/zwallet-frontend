import React from "react";
import Layout from "../../components/base/Layout";
import Main from "../../parts/Transfer";

export default function index() {
  return (
    <>
      <Layout title="Transfer" className="search" active="transfer">
        <Main></Main>
      </Layout>
    </>
  );
}
