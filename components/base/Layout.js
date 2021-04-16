import React from "react";
import Head from "next/head";
import Navbar from "../module/Navbar";
import Footer from "../module/Footer";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Zwallet | {props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
