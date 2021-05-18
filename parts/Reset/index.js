import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgot } from "../../configs/redux/actions/user";
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

  const handleClick = () => {
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(forgot(values.email))
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

  return (
    <>
      <section className="reset py-5">
        <Container>
          <Row>
            <Col className="col-lg-6 col-xl-7 d-none d-lg-block main">
              <Auth />
            </Col>
            <Col className="col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center d-lg-block pl-0 pl-lg-5 aside">
              <h1 className="mt-5 d-none d-lg-block">
                Did You Forgot Your Password? <br /> Don’t Worry, You Can Reset
                Your <br />
                Password In a Minutes.
              </h1>
              <h1 className="zwallet d-lg-none" onClick={() => handleClick()}>
                Zwallet
              </h1>
              <p className="mt-3 d-none d-lg-block">
                To reset your password, you must type your e-mail and <br /> we
                will send a link to your email and you will be directed to the
                reset password screens.
              </p>
              <p className="mt-3 text-center d-lg-none">
                Enter your Zwallet e-mail so we can send <br /> you a password
                reset link.
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
              </form>
              <Button
                type="button"
                className={`btn btn-confirm mt-5 ${
                  formik.values.email !== "" ? "active" : ""
                }`}
                disabled={formik.values.email !== "" ? false : true}
                onClick={formik.handleSubmit}
              >
                {!loading ? "Confirm" : "Please wait..."}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
