import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Status";
import Footer from "../components/Footer";

export default function status() {
  return (
    <>
      <Head>
        <title>Zwallet | Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
