import React from "react";
import Layout from "../../components/base/Layout";
import Main from "../../parts/PersonalInformation";

export default function Info() {
  return (
    <>
      <Layout
        title="Personal Information"
        className="personal"
        active="profile"
      >
        <Main></Main>
      </Layout>
    </>
  );
}
