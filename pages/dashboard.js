import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Dashboard";
import Footer from "../components/Footer";

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Zwallet | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
