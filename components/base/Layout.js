import React from "react";
import Head from "next/head";
import Container from "../module/Container";
import Row from "../module/Row";
import Navbar from "../module/Navbar";
import Sidebar from "../module/Sidebar";
import Footer from "../module/Footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Zwallet | {props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={props.active} />
      <section className={props.className}>
        <Container>
          <Row>
            <Sidebar active={props.active}></Sidebar>
            {props.children}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
