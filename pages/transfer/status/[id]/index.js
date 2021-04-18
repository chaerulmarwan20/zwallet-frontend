import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../../components/base/Layout";
import Main from "../../../../parts/Status";

export default function index() {
  const { query } = useRouter();

  return (
    <>
      <Layout title="Status" className="status" active="transfer">
        <Main id={query.id}></Main>
      </Layout>
    </>
  );
}
