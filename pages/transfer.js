import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Transfer";
import Footer from "../components/Footer";

export default function transfer() {
  return (
    <>
      <Head>
        <title>Zwallet | Transfer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
