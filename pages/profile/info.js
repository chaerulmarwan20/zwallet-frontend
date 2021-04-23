import React from "react";
import Router from "next/router";
import axios from "axios";
import Layout from "../../components/base/Layout";
import Main from "../../parts/PersonalInformation";

export default function Info({ user }) {
  return (
    <>
      <Layout
        title="Personal Information"
        className="personal"
        active="profile"
      >
        <Main
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          phone={user.phoneNumber}
        ></Main>
      </Layout>
    </>
  );
}

Info.getInitialProps = async (ctx) => {
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
    return { user: data };
  } catch (error) {
    if (ctx.req) {
      ctx.res.writeHead(301, { Location: "http://localhost:3000/auth/login" });
      ctx.res.end();
    }
    if (!ctx.req) {
      Router.push("/auth/login");
    }
    return { user: [] };
  }
};
