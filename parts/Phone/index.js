import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addPhoneNumber, findUser } from "../../configs/redux/actions/user";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const dispatch = useDispatch();

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
        .typeError("Invalid phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(addPhoneNumber(values))
        .then((res) => {
          formik.resetForm();
          dispatch(findUser())
            .then((res) => {})
            .catch((err) => {
              Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#6379F4",
              });
            });
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
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        });
    },
  });

  return (
    <Col className="col-lg-8 col-xl-9">
      <div className="details p-5">
        <h1>Add Phone Number</h1>
        <p className="mt-3">
          Add at least one phone number for the transfer
          <br className="d-none d-md-block" /> ID so you can start transfering
          your money to <br className="d-none d-md-block" /> another user.
        </p>
        <form className="mt-5 d-flex flex-column align-items-center">
          <div className="form-group phone">
            <img
              src={`/images/${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "phone-2-grey.png"
                  : formik.values.phoneNumber !== ""
                  ? "phone-2-blue.png"
                  : "phone-2-grey.png"
              }`}
              width={24}
              height={24}
              alt="Phone"
              className="phone-img"
            />
            <img
              src="/images/62.png"
              width={29}
              height={15}
              alt="Number"
              className="number-img"
            />
            <Input
              type="text"
              name="phoneNumber"
              className={`${
                formik.errors.phoneNumber && formik.touched.phoneNumber
                  ? "error"
                  : formik.values.phoneNumber !== ""
                  ? "active"
                  : ""
              }`}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="Enter your phone number"
            />
            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <small className="error">{formik.errors.phoneNumber}</small>
            )}
          </div>
          <Button
            type="button"
            className={`btn btn-phone mt-5 ${
              formik.values.phoneNumber !== "" ? "active" : ""
            }`}
            disabled={formik.values.phoneNumber !== "" ? false : true}
            onClick={formik.handleSubmit}
          >
            Add Phone Number
          </Button>
        </form>
      </div>
    </Col>
  );
}
