import React from "react";
import Layout from "../components/base/Layout";
import Main from "../parts/Dashboard";

export default function dashboard() {
  return (
    <>
      <Layout title="Dashboard">
        <Main></Main>
      </Layout>
    </>
  );
}
