import { React, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { findUser, updateUser } from "../../configs/redux/actions/user";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const UrlImage = process.env.image;

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const imageRef = useRef(null);

  const router = useRouter();

  const [status, setStatus] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [dataImage, setDataImage] = useState({
    image: user.image,
  });

  const handleClickPersonal = () => {
    router.push("/profile/info");
  };

  const handleClickPassword = () => {
    router.push("/profile/password/change");
  };

  const handleClickPin = () => {
    router.push("/profile/pin/change");
  };

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Required!"),
      firstName: Yup.string().required("Required!"),
      lastName: Yup.string().required("Required!"),
      phoneNumber: Yup.number()
        .typeError("Invalid phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("phoneNumber", values.phoneNumber);
      if (status) {
        formData.append("image", dataImage.image);
      }
      dispatch(updateUser(formData))
        .then((res) => {
          formik.resetForm();
          dispatch(findUser())
            .then((res) => {
              const result = res;
              if (result.firstName === "firstName") {
                result.firstName = "";
              }
              if (result.lastName === "lastName") {
                result.lastName = "";
              }
              if (result.phoneNumber === "000000000000") {
                result.phoneNumber = "";
              }
              formik.setValues({
                username: result.username,
                firstName: result.firstName,
                lastName: result.lastName,
                phoneNumber: result.phoneNumber,
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
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
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
          setStatus(false);
          setDataImage({
            image: user.image,
          });
        });
    },
  });

  const handleChangeImage = (event) => {
    const imgFiles = event.target.files[0];
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setStatus(true);
    setDataImage({
      image: imgFiles,
    });
  };

  const handleClickLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will exit from this page!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      confirmButtonColor: "#FF5B37",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#1EC15F",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire({
          title: "Success!",
          text: "Logout successfully",
          icon: "success",
          confirmButtonColor: "#6379F4",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/");
          } else {
            router.push("/");
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Logout!",
          text: "Cancelled :)",
          icon: "info",
          confirmButtonColor: "#6379F4",
        });
      }
    });
  };

  const getData = () => {
    dispatch(findUser())
      .then((res) => {
        setImgUrl(`${UrlImage}${res.image}`);
        const result = res;
        if (result.firstName === "firstName") {
          result.firstName = "";
        }
        if (result.lastName === "lastName") {
          result.lastName = "";
        }
        if (result.phoneNumber === "000000000000") {
          result.phoneNumber = "";
        }
        formik.setValues({
          username: result.username,
          firstName: result.firstName,
          lastName: result.lastName,
          phoneNumber: result.phoneNumber,
        });
      })
      .catch((err) => {
        if (
          err.message !== "Token is expired" &&
          err.message !== "Token is not active" &&
          err.message !== "Invalid signature"
        ) {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379F4",
          });
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Col className="col-lg-8 col-xl-9">
        <div className="details p-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
              {user.image !== undefined && (
                <img
                  src={`${UrlImage}${user.image}`}
                  width={80}
                  height={80}
                  alt="Profile"
                  className="user"
                />
              )}
            </div>
            <div
              className="edit mt-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <Image
                src="/images/pencil.png"
                width={10}
                height={10}
                alt="Edit"
              />
              <span className="ml-2">Edit</span>
            </div>
            <h1 className="mt-2">
              {user.fullName === "firstName lastName"
                ? "your full name"
                : user.fullName}
            </h1>
            <p className="mt-1">
              {user.phoneNumber === "000000000000"
                ? "your phone number"
                : user.phoneNumber}
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <div
              className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between"
              onClick={() => handleClickPersonal()}
            >
              <p>Personal Information</p>
              <div>
                <Image
                  src="/images/arrow-left.png"
                  width={28}
                  height={28}
                  alt="Arrow Left"
                />
              </div>
            </div>
            <div
              className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between mt-3"
              onClick={() => handleClickPassword()}
            >
              <p>Change Password</p>
              <div>
                <Image
                  src="/images/arrow-left.png"
                  width={28}
                  height={28}
                  alt="Arrow Left"
                />
              </div>
            </div>
            <div
              className="option pt-4 pl-4 pb-1 pr-3 d-flex justify-content-between mt-3"
              onClick={() => handleClickPin()}
            >
              <p>Change PIN</p>
              <div>
                <Image
                  src="/images/arrow-left.png"
                  width={28}
                  height={28}
                  alt="Arrow Left"
                />
              </div>
            </div>
            <div
              className="option pt-4 pl-4 pb-1 pr-3 mt-3"
              onClick={() => handleClickLogout()}
            >
              <p>Logout</p>
            </div>
          </div>
        </div>
      </Col>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit your data
              </h5>
              <Button type="button" className="close" isDismiss>
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body">
              <div className="text-center img-container d-flex justify-content-center">
                {user.image !== undefined && (
                  <div className="image">
                    <img
                      src={imgUrl}
                      width={80}
                      height={80}
                      alt="Profile"
                      className="user"
                    />
                    <input
                      type="file"
                      name="image"
                      className="file-input"
                      ref={imageRef}
                      onChange={(event) => handleChangeImage(event)}
                    />
                    <div className="shadow">Edit</div>
                  </div>
                )}
              </div>
              <form className="d-flex flex-column align-items-center">
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
                <div className="form-group person">
                  <img
                    src={`/images/${
                      formik.errors.firstName && formik.touched.firstName
                        ? "person-grey.png"
                        : formik.values.firstName !== "" &&
                          formik.values.firstName !== "firstName"
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
                    name="firstName"
                    placeholder="Enter your first name"
                    className={`${
                      formik.errors.firstName && formik.touched.firstName
                        ? "error"
                        : formik.values.firstName !== "" &&
                          formik.values.firstName !== "firstName"
                        ? "active"
                        : ""
                    }`}
                    value={
                      formik.values.firstName === "firstName"
                        ? ""
                        : formik.values.firstName
                    }
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <small className="error">{formik.errors.firstName}</small>
                  )}
                </div>
                <div className="form-group person">
                  <img
                    src={`/images/${
                      formik.errors.lastName && formik.touched.lastName
                        ? "person-grey.png"
                        : formik.values.lastName !== "" &&
                          formik.values.lastName !== "lastName"
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
                    name="lastName"
                    placeholder="Enter your last name"
                    className={`${
                      formik.errors.lastName && formik.touched.lastName
                        ? "error"
                        : formik.values.lastName !== "" &&
                          formik.values.lastName !== "lastName"
                        ? "active"
                        : ""
                    }`}
                    value={
                      formik.values.lastName === "lastName"
                        ? ""
                        : formik.values.lastName
                    }
                    onChange={formik.handleChange}
                  />
                  {formik.errors.lastName && formik.touched.lastName && (
                    <small className="error">{formik.errors.lastName}</small>
                  )}
                </div>
                <div className="form-group phone">
                  <img
                    src={`/images/${
                      formik.errors.phoneNumber && formik.touched.phoneNumber
                        ? "phone-2-grey.png"
                        : formik.values.phoneNumber !== "" &&
                          formik.values.phoneNumber !== "000000000000"
                        ? "phone-2-blue.png"
                        : "phone-2-grey.png"
                    }`}
                    width={24}
                    height={24}
                    alt="Phone"
                    className="phone-img"
                  />
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className={`${
                      formik.errors.phoneNumber && formik.touched.phoneNumber
                        ? "error"
                        : formik.values.phoneNumber !== "" &&
                          formik.values.phoneNumber !== "000000000000"
                        ? "active"
                        : ""
                    }`}
                    value={
                      formik.values.phoneNumber === "000000000000"
                        ? ""
                        : formik.values.phoneNumber
                    }
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                    <small className="error">{formik.errors.phoneNumber}</small>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center justify-content-md-end">
              {formik.errors.username ||
              formik.errors.firstName ||
              formik.errors.lastName ||
              formik.errors.phoneNumber ? (
                <Button
                  type="button"
                  className="btn btn-edit"
                  onClick={formik.handleSubmit}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  type="button"
                  className="btn btn-edit"
                  onClick={formik.handleSubmit}
                  isDismiss
                >
                  Edit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
