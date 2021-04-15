import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/History";
import Footer from "../components/Footer";

export default function history() {
  return (
    <>
      <Head>
        <title>Zwallet | History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
