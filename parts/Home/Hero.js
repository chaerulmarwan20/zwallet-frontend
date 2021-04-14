import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mt-4">
              Awesome App <br /> For Saving <span>Time.</span>
            </h1>
            <p className="mt-4">
              We bring you a mobile app for banking problems that <br /> oftenly
              wasting much of your times.
            </p>
            <button type="button" className="btn btn-try mt-4">
              Try It Free
            </button>
          </div>
          <div className="col-md-6">
            <div className="phone">
              <Image
                src="/images/phone.png"
                alt="Phone"
                width={439}
                height={846}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
