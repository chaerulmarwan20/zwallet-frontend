import React from "react";
import Layout from "../../components/base/Layout";
import Main from "../../parts/PersonalInformation";

export default function info() {
  return (
    <>
      <Layout title="Personal Information" className="personal">
        <Main></Main>
      </Layout>
    </>
  );
}
