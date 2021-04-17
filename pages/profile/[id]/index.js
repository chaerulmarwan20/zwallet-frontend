import React from "react";
import Layout from "../../../components/base/Layout";
import Main from "../../../parts/Profile";

export default function index() {
  return (
    <>
      <Layout title="Profile" className="profile" active="profile">
        <Main></Main>
      </Layout>
    </>
  );
}
