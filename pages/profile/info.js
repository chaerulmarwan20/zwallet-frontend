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
  const Url = process.env.api;
  const Fe = process.env.api_fe;
  try {
    let cookie = "";
    if (ctx.req) {
      cookie = ctx.req.headers.cookie;
    }
    const res = await axios.get(`${Url}/users/find-users`, {
      withCredentials: true,
      headers: {
        cookie: cookie,
      },
    });
    const data = res.data.data[0];
    return { user: data };
  } catch (error) {
    if (ctx.req) {
      ctx.res.writeHead(301, { Location: `${Fe}/auth/login` });
      ctx.res.end();
    }
    if (!ctx.req) {
      Router.push("/auth/login");
    }
    return { user: [] };
  }
};
