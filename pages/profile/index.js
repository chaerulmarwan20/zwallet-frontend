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
    return { props: { user: data } };
  } catch (error) {
    if (ctx.req) {
      ctx.res.writeHead(301, { Location: `${Fe}/auth/login` });
      ctx.res.end();
    }
    if (!ctx.req) {
      Router.push("/auth/login");
    }
    return { props: { user: [] } };
  }
};
