import React from "react";
import Head from "next/head";
import Main from "../parts/Login";

export default function login() {
  return (
    <>
      <Head>
        <title>Zwallet | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login-page">
        <Main></Main>
      </div>
    </>
  );
}
