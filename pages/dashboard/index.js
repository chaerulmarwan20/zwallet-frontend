import React from "react";
import Layout from "../../components/base/Layout";
import Main from "../../parts/Dashboard";

export default function index() {
  return (
    <>
      <Layout title="Dashboard" className="dashboard">
        <Main></Main>
      </Layout>
    </>
  );
}
