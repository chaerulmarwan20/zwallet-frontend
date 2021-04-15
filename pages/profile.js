import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/Profile";
import Footer from "../components/Footer";

export default function profile() {
  return (
    <>
      <Head>
        <title>Zwallet | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
