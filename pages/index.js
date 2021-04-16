import Head from "next/head";
import Navbar from "../parts/Home/Navbar";
import Hero from "../parts/Home/Hero";
import About from "../parts/Home/About";
import Partners from "../parts/Home/Partners";
import Features from "../parts/Home/Features";
import Users from "../parts/Home/Users";
import Footer from "../parts/Home/Footer";
import Container from "../components/module/Container";
import Row from "../components/module/Row";
import Col from "../components/module/Col";
import Button from "../components/module/Button";

export default function Home() {
  return (
    <div className="landing-page">
      <Head>
        <title>Zwallet | Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar container={Container} button={Button}></Navbar>
      <Hero container={Container} row={Row} col={Col} button={Button}></Hero>
      <About container={Container} row={Row} col={Col}></About>
      <Partners container={Container} row={Row} col={Col}></Partners>
      <Features container={Container} row={Row} col={Col}></Features>
      <Users container={Container} row={Row} col={Col}></Users>
      <Footer container={Container} row={Row} col={Col}></Footer>
    </div>
  );
}
