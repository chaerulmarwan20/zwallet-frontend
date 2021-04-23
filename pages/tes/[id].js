import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function DetailTes({ history }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return history === null ? (
    <h1>Data not found</h1>
  ) : (
    <div>
      <h1>{history.username}</h1>
      <h1>{history.email}</h1>
      <h1>{history.fullName}</h1>
      <h1>{history.phoneNumber}</h1>
      <h1>{history.amount}</h1>
      <h1>{history.balanceLeft}</h1>
      <h1>{history.notes}</h1>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  try {
    const id = ctx.params.id;
    const result = await axios.get(
      "http://localhost:8080/api/v1/transactions/details/users/" + id
    );
    const data = result.data.data[0];
    return {
      props: {
        history: data,
      },
    };
  } catch (err) {
    return {
      props: {
        history: null,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const result = await axios.get(
    `http://localhost:8080/api/v1/transactions/details/users/`
  );
  const data = result.data.data;
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    fallback: true,
    paths: paths,
  };
};
