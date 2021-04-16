import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Col from "../../components/module/Col";

export default function index() {
  const router = useRouter();

  const handleClickPersonal = () => {
    router.push("/personal");
  };

  const handleClickPassword = () => {
    router.push("/password");
  };

  const handleClickPin = () => {
    router.push("/changepin");
  };

  return (
    <Col className="col-md-9">
      <div className="details p-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <Image
              src="/images/profile.png"
              width={80}
              height={80}
              alt="Profile"
            />
          </div>
          <div>
            <Image src="/images/pencil.png" width={10} height={10} alt="Edit" />
            <span className="ml-2">Edit</span>
          </div>
          <h1 className="mt-2">Robert Chandler</h1>
          <p className="mt-1">+62 813-9387-7946</p>
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
          <div className="option pt-4 pl-4 pb-1 pr-3 mt-3">
            <p>Logout</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
