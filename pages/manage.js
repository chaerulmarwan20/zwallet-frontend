import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Manage";
import Footer from "../components/Footer";

export default function manage() {
  return (
    <>
      <Head>
        <title>Zwallet | Manage Phone Number</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
