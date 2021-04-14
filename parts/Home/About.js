import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              <span>About</span> the Application.
            </h1>
          </div>
          <div className="col-md-12 mt-3">
            <p className="text-center">
              We have some great features from the application and it’s totally
              free
              <br />
              to use by all users around the world.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="apps text-center mt-4 py-4">
              <Image src="/images/call.png" alt="call" width={80} height={80} />
              <h2 className="mt-3">24/7 Support</h2>
              <p className="mt-3">
                We have 24/7 contact support so you
                <br /> can contact us whenever you want <br /> and we will
                respond it.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="apps text-center mt-4 py-4">
              <Image
                src="/images/privacy.png"
                alt="privacy"
                width={80}
                height={80}
              />
              <h2 className="mt-3">Data Privacy</h2>
              <p className="mt-3">
                We make sure your data is safe in our <br /> database and we
                will encrypt any <br /> data you submitted to us.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="apps text-center mt-4 py-4">
              <Image
                src="/images/download.png"
                alt="call"
                width={80}
                height={80}
              />
              <h2 className="mt-3">Easy Download</h2>
              <p className="mt-3">
                Zwallet is 100% totally free to use it’s <br /> now available on
                Google Play Store <br /> and App Store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
