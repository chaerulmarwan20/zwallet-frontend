import React from "react";
import Head from "next/head";
import Main from "../parts/Pin";

export default function pin() {
  return (
    <>
      <Head>
        <title>Zwallet | Create Pin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pin-page">
        <Main></Main>
      </div>
    </>
  );
}
