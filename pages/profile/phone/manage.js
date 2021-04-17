import React from "react";
import Layout from "../../../components/base/Layout";
import Main from "../../../parts/Manage";

export default function manage() {
  return (
    <>
      <Layout title="Manage Phone Number" className="manage" active="profile">
        <Main></Main>
      </Layout>
    </>
  );
}
