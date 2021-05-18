import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { reset } from "../../configs/redux/actions/user";
import Auth from "../../components/module/Auth";
import Container from "../../components/module/Container";
import Row from "../../components/module/Row";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index(props) {
  const email = props.email;
  const token = props.token;

  const router = useRouter();

  const dispatch = useDispatch();

  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");

  const handleClick = () => {
    router.push("/");
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password do not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(reset(email, token, values))
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
              router.push("/auth/login");
            } else {
              router.push("/auth/login");
            }
          });
        })
        .catch((err) => {
          if (err.message === `"confirmPassword" must be [ref:password]`) {
            Swal.fire({
              title: "Error!",
              text: "Password do not match",
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

  const handleToggleConfirm = () => {
    if (typeConfirm === "text") {
      setTypeConfirm("password");
    } else {
      setTypeConfirm("text");
    }
  };

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
                Now you can create a new password for your Zwallet <br />
                account. Type your password twice so we can confirm your new
                passsword.
              </p>
              <p className="mt-3 text-center d-lg-none">
                Create and confirm your new password so <br /> you can login to
                Zwallet.
              </p>
              <form className="mt-5">
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
                    placeholder="Create new password"
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
                <div className="form-group confirm-password">
                  <img
                    src={`/images/${
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "lock-grey.png"
                        : formik.values.confirmPassword !== ""
                        ? "lock-blue.png"
                        : "lock-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Lock"
                    className="confirm-password-img"
                  />
                  <Input
                    type={typeConfirm}
                    name="confirmPassword"
                    className={`${
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                        ? "error"
                        : formik.values.confirmPassword !== ""
                        ? "active"
                        : ""
                    }`}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    placeholder="Repeat new password"
                  />
                  {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword && (
                      <small className="error">
                        {formik.errors.confirmPassword}
                      </small>
                    )}
                  <img
                    src="/images/eye-crossed.png"
                    width={24}
                    height={24}
                    alt="Eye"
                    className="eye-img"
                    onClick={handleToggleConfirm}
                  />
                </div>
              </form>
              <Button
                type="button"
                className={`btn btn-reset mt-5 ${
                  formik.values.password !== "" &&
                  formik.values.confirmPassword !== ""
                    ? "active"
                    : ""
                }`}
                disabled={
                  formik.values.password !== "" &&
                  formik.values.confirmPassword !== ""
                    ? false
                    : true
                }
                onClick={formik.handleSubmit}
              >
                Reset Password
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
