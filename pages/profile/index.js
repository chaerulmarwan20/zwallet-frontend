import React from "react";
import Router from "next/router";
import axios from "axios";
import Layout from "../../components/base/Layout";
import Main from "../../parts/Profile";

export default function Profile({ user }) {
  return (
    <>
      <Layout title="Profile" className="profile" active="profile">
        <Main
          image={user.image}
          name={user.fullName}
          phone={user.phoneNumber}
        ></Main>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    let cookie = "";
    if (ctx.req) {
      cookie = ctx.req.headers.cookie;
    }
    const res = await axios.get(
      "http://localhost:8080/api/v1/users/find-users",
      {
        withCredentials: true,
        headers: {
          cookie: cookie,
        },
      }
    );
    const data = res.data.data[0];
    return { props: { user: data } };
  } catch (error) {
    if (ctx.req) {
      ctx.res.writeHead(301, { Location: "http://localhost:3000/auth/login" });
      ctx.res.end();
    }
    if (!ctx.req) {
      Router.push("/auth/login");
    }
    return { props: { user: [] } };
  }
};
