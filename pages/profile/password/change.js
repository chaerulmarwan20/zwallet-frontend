import React from "react";
import Layout from "../../../components/base/Layout";
import Main from "../../../parts/ChangePassword";

export default function change() {
  return (
    <>
      <Layout
        title="Change Password"
        className="change-password"
        active="profile"
      >
        <Main></Main>
      </Layout>
    </>
  );
}
