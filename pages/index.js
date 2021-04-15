import Head from "next/head";
import Navbar from "../parts/Home/Navbar";
import Hero from "../parts/Home/Hero";
import About from "../parts/Home/About";
import Partners from "../parts/Home/Partners";
import Features from "../parts/Home/Features";
import Users from "../parts/Home/Users";
import Footer from "../parts/Home/Footer";

export default function Home() {
  return (
    <div className="landing-page">
      <Head>
        <title>Zwallet | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Partners></Partners>
      <Features></Features>
      <Users></Users>
      <Footer></Footer>
    </div>
  );
}
