import React from "react";
import Layout from "../../../components/base/Layout";
import Main from "../../../parts/ChangePin";

export default function change() {
  return (
    <>
      <Layout title="Change PIN" className="change-pin" active="profile">
        <Main></Main>
      </Layout>
    </>
  );
}
