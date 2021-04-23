import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../../parts/Login";

export default function login() {
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
        <title>Zwallet | Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login-page">
        <Main></Main>
      </div>
    </>
  );
}
