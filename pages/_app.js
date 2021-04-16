import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/login.css";
import "../styles/sign-up.css";
import "../styles/reset.css";
import "../styles/pin.css";
import "../styles/dashboard.css";
import "../styles/history.css";
import "../styles/top-up.css";
import "../styles/transfer.css";
import "../styles/confirmation.css";
import "../styles/status.css";
import "../styles/profile.css";
import "../styles/personal-info.css";
import "../styles/manage.css";
import "../styles/change-password.css";
import "../styles/change-pin.css";
import "../styles/phone.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap" />
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
