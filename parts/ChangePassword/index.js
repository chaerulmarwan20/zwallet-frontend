import { useRouter } from "next/router";
import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updatePassword } from "../../configs/redux/actions/user";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const dispatch = useDispatch();

  const router = useRouter();

  const [type, setType] = useState("password");
  const [typeNew, setTypeNew] = useState("password");
  const [typeRepeat, setTypeRepeat] = useState("password");

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password do not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(updatePassword(values))
        .then((res) => {
          formik.resetForm();
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          }).then(() => {
            router.push("/profile");
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

  const handleToggleNew = () => {
    if (typeNew === "text") {
      setTypeNew("password");
    } else {
      setTypeNew("text");
    }
  };

  const handleToggleRepeat = () => {
    if (typeRepeat === "text") {
      setTypeRepeat("password");
    } else {
      setTypeRepeat("text");
    }
  };

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="details p-5">
        <h1>Change Password</h1>
        <p className="mt-3">
          You must enter your current password and then
          <br className="d-none d-md-block" /> type your new password twice.
        </p>
        <form>
          <div className="form-group password">
            <img
              src={`/images/${
                formik.errors.currentPassword && formik.touched.currentPassword
                  ? "lock-grey.png"
                  : formik.values.currentPassword !== ""
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
              name="currentPassword"
              className={`${
                formik.errors.currentPassword && formik.touched.currentPassword
                  ? "error"
                  : formik.values.currentPassword !== ""
                  ? "active"
                  : ""
              }`}
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              placeholder="Current password"
            />
            {formik.errors.currentPassword &&
              formik.touched.currentPassword && (
                <small className="error">{formik.errors.currentPassword}</small>
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
              type={typeNew}
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
              placeholder="New password"
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
              onClick={handleToggleNew}
            />
          </div>
          <div className="form-group password">
            <img
              src={`/images/${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? "lock-grey.png"
                  : formik.values.confirmPassword !== ""
                  ? "lock-blue.png"
                  : "lock-grey.png"
              }`}
              width={24}
              height={24}
              alt="Lock"
              className="password-img"
            />
            <Input
              type={typeRepeat}
              name="confirmPassword"
              className={`${
                formik.errors.confirmPassword && formik.touched.confirmPassword
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
                <small className="error">{formik.errors.confirmPassword}</small>
              )}
            <img
              src="/images/eye-crossed.png"
              width={24}
              height={24}
              alt="Eye"
              className="eye-img"
              onClick={handleToggleRepeat}
            />
          </div>
          <Button
            type="button"
            className={`btn btn-password mt-5 ${
              formik.values.currentPassword !== "" &&
              formik.values.password !== "" &&
              formik.values.confirmPassword !== ""
                ? "active"
                : ""
            }`}
            disabled={
              formik.values.currentPassword !== "" &&
              formik.values.password !== "" &&
              formik.values.confirmPassword !== ""
                ? false
                : true
            }
            onClick={formik.handleSubmit}
          >
            Change Password
          </Button>
        </form>
      </div>
    </Col>
  );
}
