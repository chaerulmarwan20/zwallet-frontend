import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../../parts/Reset";

export default function reset() {
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
        <title>Zwallet | Reset Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="reset-page">
        <Main></Main>
      </div>
    </>
  );
}
