import { React, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addPhoneNumber, findUser } from "../../configs/redux/actions/user";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    phoneNumber: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPhoneNumber(data))
      .then((res) => {
        setData({
          phoneNumber: "",
        });
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379F4",
        });
        dispatch(findUser());
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
  };

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <h1>Add Phone Number</h1>
        <p className="mt-3">
          Add at least one phone number for the transfer <br /> ID so you can
          start transfering your money to <br /> another user.
        </p>
        <form className="mt-5">
          <div className="form-group phone">
            <img
              src={`${
                data.phoneNumber !== ""
                  ? "/images/phone-2-blue.png"
                  : "/images/phone-2-grey.png"
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
              className={`${data.phoneNumber !== "" ? "active" : ""}`}
              value={data.phoneNumber}
              placeholder="Enter your phone number"
              onChange={handleFormChange}
            />
          </div>
          <Button
            type="button"
            className={`btn btn-phone mt-5 ${
              data.phoneNumber !== "" ? "active" : ""
            }`}
            onClick={handleSubmit}
          >
            Add Phone Number
          </Button>
        </form>
      </div>
    </Col>
  );
}
