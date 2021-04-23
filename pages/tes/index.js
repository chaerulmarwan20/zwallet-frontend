import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import NumberFormat from "react-number-format";

export default function Tes({ payments }) {
  // const UrlImage = process.env.image;

  const [amount, setAmount] = useState("");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleClick = () => {
    const data = amount.slice(2);
    let number = 0;
    Array.from(data).forEach((item) => {
      if (item !== ",") {
        number += item;
      }
    });
    const result = number.slice(1);
    console.log(result);
    console.log(typeof Number(result));
  };

  return (
    <>
      {/* <nav className="navbar navbar-expand-md navbar-light fixed-top custom">
        <div className="container">
          <Link href="/dashboard">
            <a className="navbar-brand">Zwallet</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              {user.image !== undefined && (
                <img
                  src={`${UrlImage}${user.image}`}
                  width={52}
                  height={52}
                  alt="Profile"
                  className="user"
                />
              )}
            </div>
            <div className="profile mx-4 d-flex flex-column">
              <span className="name">{user.fullName}</span>
              <span className="number">{user.phoneNumber}</span>
            </div>
            <Image
              src="/images/bell.png"
              width={24}
              height={24}
              alt="Bell"
              className="bell"
            />
          </div>
        </div>
      </nav> */}
      <NumberFormat
        thousandSeparator={true}
        prefix={"Rp"}
        placeholder="00.0"
        onChange={handleChange}
      />
      <button type="button" onClick={() => handleClick()}>
        Process
      </button>
      {payments.map((item) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
    </>
  );
}

// Tes.getInitialProps = async (ctx) => {
//   try {
//     let cookie = "";
//     if (ctx.req) {
//       cookie = ctx.req.headers.cookie;
//     }
//     const res = await axios.get(
//       "http://localhost:8080/api/v1/users/find-users",
//       {
//         withCredentials: true,
//         headers: {
//           cookie: cookie,
//         },
//       }
//     );
//     const data = res.data.data[0];
//     return { user: data };
//   } catch (error) {
//     if (ctx.req) {
//       ctx.res.writeHead(301, { Location: "http://localhost:3000/auth/login" });
//       ctx.res.end();
//     }
//     if (!ctx.req) {
//       Router.push("/auth/login");
//     }
//     return { user: [] };
//   }
// };

// export const getServerSideProps = async (ctx) => {
//   try {
//     let cookie = "";
//     if (ctx.req) {
//       cookie = ctx.req.headers.cookie;
//     }
//     const res = await axios.get(
//       "http://localhost:8080/api/v1/users/find-users",
//       {
//         withCredentials: true,
//         headers: {
//           cookie: cookie,
//         },
//       }
//     );
//     const data = res.data.data[0];
//     return { props: { user: data } };
//   } catch (error) {
//     if (ctx.req) {
//       ctx.res.writeHead(301, { Location: "http://localhost:3000/auth/login" });
//       ctx.res.end();
//     }
//     if (!ctx.req) {
//       Router.push("/auth/login");
//     }
//     return { props: { user: [] } };
//   }
// };

export const getStaticProps = async (ctx) => {
  const result = await axios.get(
    "http://localhost:8080/api/v1/transactions/payments"
  );
  const data = result.data.data;
  return {
    props: {
      payments: data,
    },
  };
};
