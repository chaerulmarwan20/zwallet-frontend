import React from "react";
import Layout from "../components/base/Layout";
import Main from "../parts/Topup";

export default function topup() {
  return (
    <>
      <Layout title="Top Up" className="top-up">
        <Main></Main>
      </Layout>
    </>
  );
}