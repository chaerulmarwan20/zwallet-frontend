import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../parts/ChangePassword";
import Footer from "../components/Footer";

export default function password() {
  return (
    <>
      <Head>
        <title>Zwallet | Change Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
