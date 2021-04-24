import { React, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { verify } from "../../../../../actions";
import Main from "../../../../../parts/Pin";

export default function index() {
  const { query } = useRouter();

  const router = useRouter();

  const dispatch = useDispatch();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  if (token) {
    router.push("/dashboard");
  }

  useEffect(() => {
    if (query.email !== undefined && query.token !== undefined) {
      dispatch(verify(query.email, query.token))
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.message,
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
