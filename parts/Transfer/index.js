import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  const [showResult, setShowResult] = useState(false);

  return (
    <section className="search">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar d-flex flex-column justify-content-between p-5">
              <div className="main-menu d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/grid-grey.png"
                    width={28}
                    height={28}
                    alt="Dashboard"
                  />
                  <Link href="#">
                    <a className="ml-4">Dashboard</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5 active">
                  <Image
                    src="/images/arrow-up-blue.png"
                    width={28}
                    height={28}
                    alt="Transfer"
                  />
                  <Link href="#">
                    <a className="ml-4 active">Transfer</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/plus-grey.png"
                    width={28}
                    height={28}
                    alt="Top Up"
                  />
                  <Link href="#">
                    <a className="ml-4">Top Up</a>
                  </Link>
                </div>
                <div className="d-flex align-items-center mt-5">
                  <Image
                    src="/images/user-grey.png"
                    width={28}
                    height={28}
                    alt="Profile"
                  />
                  <Link href="#">
                    <a className="ml-4">Profile</a>
                  </Link>
                </div>
              </div>
              <div className="logout-menu">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/log-out-grey.png"
                    width={28}
                    height={28}
                    alt="Log Out"
                  />
                  <Link href="#">
                    <a className="ml-4">Log Out</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
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
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Search receiver here"
                  />
                </div>
              </form>
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
              <div className="users d-flex align-items-center py-2 pl-3 mt-4">
                <div className="image">
                  <Image
                    src="/images/momo.png"
                    width={70}
                    height={70}
                    alt="User"
                  />
                </div>
                <div className="profile d-flex flex-column ml-3">
                  <span className="name">Momo Taro</span>
                  <span className="number mt-1">+62 812-4343-6731</span>
                </div>
              </div>
              <div className="users d-flex align-items-center py-2 pl-3 mt-4">
                <div className="image">
                  <Image
                    src="/images/users1.png"
                    width={70}
                    height={70}
                    alt="User"
                  />
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
                      <input
                        type="text"
                        className="form-control amount"
                        name="amount"
                        id="amount"
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
                        <input
                          type="text"
                          className="form-control notes"
                          name="notes"
                          id="notes"
                          placeholder="Add some notes"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-continue">
                      Continue
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
