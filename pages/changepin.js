import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/ChangePin";
import Footer from "../components/Footer";

export default function changepin() {
  return (
    <>
      <Head>
        <title>Zwallet | Change PIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
