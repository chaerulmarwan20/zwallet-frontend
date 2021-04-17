import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ container: Container, button: Button }) {
  const router = useRouter();

  const handleClickLogin = () => {
    router.push("/auth/login");
  };

  const handleClickSignUp = () => {
    router.push("/auth/signup");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-transparent">
      <Container className="mt-4">
        <Link href="/">
          <a className="navbar-brand">Zwallet</a>
        </Link>
        <Button className="navbar-toggler" type="button" isNavbar>
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Button
              type="button"
              className="btn btn-login"
              onClick={() => handleClickLogin()}
            >
              Login
            </Button>
            <Button
              type="button"
              className="btn btn-sign-up ml-4"
              onClick={() => handleClickSignUp()}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
