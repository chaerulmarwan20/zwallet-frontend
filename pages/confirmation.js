import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Confirmation";
import Footer from "../components/Footer";

export default function confirmation() {
  return (
    <>
      <Head>
        <title>Zwallet | Confirmation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
