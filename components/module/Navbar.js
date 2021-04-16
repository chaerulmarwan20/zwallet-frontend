import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    if (notification === false) {
      setNotification(true);
    } else {
      setNotification(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top custom">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Zwallet</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Image
                src="/images/profile.png"
                width={52}
                height={52}
                alt="Profile"
              />
            </div>
            <div className="profile mx-4 d-flex flex-column">
              <span className="name">Robert Chandler</span>
              <span className="number">+62 8139 3877 7946</span>
            </div>
            <Image
              src="/images/bell.png"
              width={24}
              height={24}
              alt="Bell"
              className="bell"
              onClick={() => showNotification()}
            />
          </div>
        </div>
      </nav>
      {notification === true && (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="notification p-4">
                <h3>Today</h3>
                <div className="history p-3 mt-4">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src="/images/arrow-up-green.png"
                        width={28}
                        height={28}
                        alt="Arrow Up"
                      />
                    </div>
                    <div className="detail d-flex flex-column ml-2">
                      <span className="info">Transfered from Joshua Lee</span>
                      <span className="price mt-1">Rp220.000</span>
                    </div>
                  </div>
                </div>
                <div className="history p-3 mt-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src="/images/arrow-up-red.png"
                        width={28}
                        height={28}
                        alt="Arrow Up"
                      />
                    </div>
                    <div className="detail d-flex flex-column ml-2">
                      <span className="info">Netflix subscription</span>
                      <span className="price mt-1">Rp149.000</span>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4">This Week</h3>
                <div className="history p-3 mt-4">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src="/images/arrow-up-red.png"
                        width={28}
                        height={28}
                        alt="Arrow Up"
                      />
                    </div>
                    <div className="detail d-flex flex-column ml-2">
                      <span className="info">Transfer to Jessica Lee</span>
                      <span className="price mt-1">Rp100.000</span>
                    </div>
                  </div>
                </div>
                <div className="history p-3 mt-3">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image
                        src="/images/arrow-up-green.png"
                        width={28}
                        height={28}
                        alt="Arrow Up"
                      />
                    </div>
                    <div className="detail d-flex flex-column ml-2">
                      <span className="info">Top up from BNI E-Banking</span>
                      <span className="price mt-1">Rp300.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
