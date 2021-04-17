import React from "react";
import Head from "next/head";
import Main from "../../parts/Reset";

export default function reset() {
  return (
    <>
      <Head>
        <title>Zwallet | Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="reset-page">
        <Main></Main>
      </div>
    </>
  );
}
