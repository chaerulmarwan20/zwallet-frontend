import { React, useState } from "react";
import Image from "next/image";
import Col from "../../components/module/Col";
import Input from "../../components/module/Input";
import Button from "../../components/module/Button";

export default function index() {
  const [showResult, setShowResult] = useState(false);

  return (
    <Col className="col-md-9">
      <div className="search-receiver p-5">
        <h1>Search Receiver</h1>
        <form className="mt-4">
          <div className="form-group receiver">
            <img
              src="/images/search.png"
              width={24}
              height={24}
              alt="Search"
              className="search-img"
            />
            <Input
              type="text"
              name="keyword"
              placeholder="Search receiver here"
            />
          </div>
        </form>
        <div className="users d-flex align-items-center py-2 pl-3 mt-4">
          <div className="image">
            <Image src="/images/suhi.png" width={70} height={70} alt="User" />
          </div>
          <div className="profile d-flex flex-column ml-3">
            <span className="name">Samuel Suhi</span>
            <span className="number mt-1">+62 813-8492-9994</span>
          </div>
        </div>
        <div className="users d-flex align-items-center py-2 pl-3 mt-4">
          <div className="image">
            <Image src="/images/momo.png" width={70} height={70} alt="User" />
          </div>
          <div className="profile d-flex flex-column ml-3">
            <span className="name">Momo Taro</span>
            <span className="number mt-1">+62 812-4343-6731</span>
          </div>
        </div>
        <div className="users d-flex align-items-center py-2 pl-3 mt-4">
          <div className="image">
            <Image src="/images/users1.png" width={70} height={70} alt="User" />
          </div>
          <div className="profile d-flex flex-column ml-3">
            <span className="name">Jessica Keen</span>
            <span className="number mt-1">+62 811-3452-5252</span>
          </div>
        </div>
        <div className="users d-flex align-items-center py-2 pl-3 mt-4">
          <div className="image">
            <Image
              src="/images/profile.png"
              width={70}
              height={70}
              alt="User"
            />
          </div>
          <div className="profile d-flex flex-column ml-3">
            <span className="name">Michael Le</span>
            <span className="number mt-1">+62 810-4224-4613</span>
          </div>
        </div>
        {showResult === true && (
          <>
            <h1>Transfer Money</h1>
            <div className="users d-flex align-items-center py-2 pl-3 mt-4">
              <div className="image">
                <Image
                  src="/images/suhi.png"
                  width={70}
                  height={70}
                  alt="User"
                />
              </div>
              <div className="profile d-flex flex-column ml-3">
                <span className="name">Samuel Suhi</span>
                <span className="number mt-1">+62 813-8492-9994</span>
              </div>
            </div>
            <p className="mt-4">
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
            <form className="mt-5">
              <div className="form-group">
                <Input
                  type="text"
                  className="amount"
                  name="amount"
                  placeholder="0.00"
                />
              </div>
            </form>
            <p className="credit text-center mt-4">Rp120.000 Available</p>
            <div className="d-flex justify-content-center">
              <form className="mt-5">
                <div className="form-group pencil">
                  <img
                    src="/images/pencil.png"
                    width={24}
                    height={24}
                    alt="Pencil"
                    className="pencil-img"
                  />
                  <Input
                    type="text"
                    className="notes"
                    name="notes"
                    placeholder="Add some notes"
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-end">
              <Button type="button" className="btn btn-continue">
                Continue
              </Button>
            </div>
          </>
        )}
      </div>
    </Col>
  );
}
