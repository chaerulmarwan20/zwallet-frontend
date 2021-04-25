import React from "react";
import Layout from "../components/base/Layout";
import Main from "../parts/Notification";

export default function notification() {
  return (
    <>
      <Layout title="Notification" className="history" active="notification">
        <Main></Main>
      </Layout>
    </>
  );
}
