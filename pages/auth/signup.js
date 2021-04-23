import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../../parts/Signup";

export default function signup() {
  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (token) {
    router.push("/dashboard");
  }

  return (
    <>
      <Head>
        <title>Zwallet | Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sign-up-page">
        <Main></Main>
      </div>
    </>
  );
}
