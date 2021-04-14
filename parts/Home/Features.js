import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="features py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Image
              src="/images/phone2.png"
              alt="Phone2"
              width={450}
              height={856}
            />
          </div>
          <div className="col-md-6">
            <h1>
              All The <span>Great</span>
              <br />
              Zwallet Features.
            </h1>
            <div className="step pl-4 pr-4 pt-4 pb-3 mt-5">
              <h3>
                <span>1. </span> Small Fee
              </h3>
              <p className="mt-2">
                We only charge 5% of every success transaction done in Zwallet
                app.
              </p>
            </div>
            <div className="step pl-4 pr-4 pt-4 pb-3 mt-4">
              <h3>
                <span>2. </span> Data Secured
              </h3>
              <p className="mt-2">
                All your data is secured properly in our system and it’s
                encrypted.
              </p>
            </div>
            <div className="step pl-4 pr-4 pt-4 pb-3 mt-4">
              <h3>
                <span>3. </span> User Friendly
              </h3>
              <p className="mt-2">
                Zwallet come up with modern and sleek design and not
                complicated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
