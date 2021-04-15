import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Phone";
import Footer from "../components/Footer";

export default function phone() {
  return (
    <>
      <Head>
        <title>Zwallet | Add Phone Number</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
