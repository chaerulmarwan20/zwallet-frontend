import { React, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signUp } from "../../configs/redux/actions/user";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const router = useRouter();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const [type, setType] = useState("password");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(signUp(values))
        .then((res) => {
          formik.resetForm();
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
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

  const handleClick = () => {
    router.push("/");
  };

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  return (
    <>
      <section className="sign-up py-5">
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
              <p className="mt-3 d-none d-lg-block">
                Transfering money is eassier than ever, you can access <br />
                Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
                we cover all of that for you!
              </p>
              <p className="mt-3 text-center d-lg-none">
                Create your account to access Zwallet.
              </p>
              <form className="mt-5">
                <div className="form-group person">
                  <img
                    src={`/images/${
                      formik.errors.username && formik.touched.username
                        ? "person-grey.png"
                        : formik.values.username !== ""
                        ? "person-blue.png"
                        : "person-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Person"
                    className="person-img"
                  />
                  <Input
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    className={`${
                      formik.errors.username && formik.touched.username
                        ? "error"
                        : formik.values.username !== ""
                        ? "active"
                        : ""
                    }`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <small className="error">{formik.errors.username}</small>
                  )}
                </div>
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
                    placeholder="Enter your e-mail"
                    className={`${
                      formik.errors.email && formik.touched.email
                        ? "error"
                        : formik.values.email !== ""
                        ? "active"
                        : ""
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
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
                    placeholder="Create your password"
                    className={`${
                      formik.errors.password && formik.touched.password
                        ? "error"
                        : formik.values.password !== ""
                        ? "active"
                        : ""
                    }`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
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
              <br />
              <Button
                type="button"
                className={`btn btn-sign-up mt-5 ${
                  formik.values.username !== "" &&
                  formik.values.email !== "" &&
                  formik.values.password !== ""
                    ? "active"
                    : ""
                }`}
                disabled={
                  formik.values.username !== "" &&
                  formik.values.email !== "" &&
                  formik.values.password !== ""
                    ? false
                    : true
                }
                onClick={formik.handleSubmit}
              >
                {!loading ? "Sign Up" : "Please wait..."}
              </Button>
              <p className="text-center mt-5 account">
                Already have an account? Let’s{" "}
                <Link href="/auth/login">
                  <a>Login</a>
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
