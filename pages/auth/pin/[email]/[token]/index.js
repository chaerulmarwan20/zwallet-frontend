import { React, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Main from "../../../../../parts/Pin";

export default function index() {
  const Url = process.env.api;

  const { query } = useRouter();

  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (token) {
    router.push("/dashboard");
  }

  useEffect(() => {
    if (query.email !== undefined && query.token !== undefined) {
      axios
        .get(
          `${Url}/users/auth/verify/?email=${query.email}&token=${query.token}`
        )
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        });
    }
  }, [query.email, query.token]);

  return (
    <>
      <Head>
        <title>Zwallet | Create PIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pin-page">
        <Main email={query.email}></Main>
      </div>
    </>
  );
}
