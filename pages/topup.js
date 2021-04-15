import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Topup";
import Footer from "../components/Footer";

export default function topup() {
  return (
    <>
      <Head>
        <title>Zwallet | Top Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
