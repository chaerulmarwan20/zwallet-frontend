import { React, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../configs/redux/actions/user";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [type, setType] = useState("password");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(login(values))
        .then((res) => {
          formik.resetForm();
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/dashboard");
            } else {
              router.push("/dashboard");
            }
          });
        })
        .catch((err) => {
          if (err.message === `"email" must be a valid email`) {
            Swal.fire({
              title: "Error!",
              text: "Email must be a valid email",
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#6379F4",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#6379F4",
            });
          }
        });
    },
  });

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <section className="login py-5">
        <Container>
          <Row>
            <Col className="col-lg-6 col-xl-7 d-none d-lg-block main">
              <Auth />
            </Col>
            <Col className="col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center d-lg-block pl-0 pl-lg-5 aside">
              <h1 className="mt-5 d-none d-lg-block">
                Start Accessing Banking Needs <br /> With All Devices and All
                Platforms <br />
                With 30.000+ Users
              </h1>
              <h1 className="zwallet d-lg-none" onClick={() => handleClick()}>
                Zwallet
              </h1>
              <h1 className="mt-5 d-lg-none">Login</h1>
              <p className="mt-3 d-none d-lg-block">
                Transfering money is eassier than ever, you can access <br />
                Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
                we cover all of that for you!
              </p>
              <p className="mt-3 text-center d-lg-none">
                Login to your existing account to access <br /> all the features
                in Zwallet.
              </p>
              <form className="mt-5">
                <div className="form-group mail">
                  <img
                    src={`/images/${
                      formik.errors.email && formik.touched.email
                        ? "mail-grey.png"
                        : formik.values.email !== ""
                        ? "mail-blue.png"
                        : "mail-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Mail"
                    className="mail-img"
                  />
                  <Input
                    type="text"
                    name="email"
                    className={`${
                      formik.errors.email && formik.touched.email
                        ? "error"
                        : formik.values.email !== ""
                        ? "active"
                        : ""
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your e-mail"
                  />
                  {formik.errors.email && formik.touched.email && (
                    <small className="error">{formik.errors.email}</small>
                  )}
                </div>
                <div className="form-group password">
                  <img
                    src={`/images/${
                      formik.errors.password && formik.touched.password
                        ? "lock-grey.png"
                        : formik.values.password !== ""
                        ? "lock-blue.png"
                        : "lock-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Lock"
                    className="password-img"
                  />
                  <Input
                    type={type}
                    name="password"
                    className={`${
                      formik.errors.password && formik.touched.password
                        ? "error"
                        : formik.values.password !== ""
                        ? "active"
                        : ""
                    }`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                  />
                  {formik.errors.password && formik.touched.password && (
                    <small className="error">{formik.errors.password}</small>
                  )}
                  <img
                    src="/images/eye-crossed.png"
                    width={24}
                    height={24}
                    alt="Eye"
                    className="eye-img"
                    onClick={handleToggle}
                  />
                </div>
              </form>
              <Link href="/auth/reset">
                <a className="forgot float-right">Forgot password?</a>
              </Link>
              <br />
              <Button
                type="button"
                className={`btn btn-login mt-5 ${
                  formik.values.email !== "" && formik.values.password !== ""
                    ? "active"
                    : ""
                }`}
                disabled={
                  formik.values.email !== "" && formik.values.password !== ""
                    ? false
                    : true
                }
                onClick={formik.handleSubmit}
              >
                Login
              </Button>
              <p className="text-center mt-5 account">
                Don’t have an account? Let’s{" "}
                <Link href="/auth/signup">
                  <a>Sign Up</a>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
