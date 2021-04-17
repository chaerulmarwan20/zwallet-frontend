import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../../../../../parts/Forgot";

export default function index() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Zwallet | Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="reset-page">
        <Main email={query.email} token={query.token}></Main>
      </div>
    </>
  );
}
