import React from "react";
import Head from "next/head";
import Main from "../../parts/Signup";

export default function signup() {
  return (
    <>
      <Head>
        <title>Zwallet | Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sign-up-page">
        <Main></Main>
      </div>
    </>
  );
}
