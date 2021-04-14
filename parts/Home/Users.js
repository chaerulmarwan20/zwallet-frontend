import React from "react";
import Image from "next/image";

export default function Users() {
  return (
    <section className="users">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              What Users are <span>Saying.</span>
            </h1>
          </div>
          <div className="col-md-12">
            <p className="text-center mt-3">
              We have some great features from the application and it’s totally
              free <br /> to use by all users around the world.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="testimony pb-4 pt-5 px-3 text-center">
              <Image
                src="/images/users1.png"
                alt="Users 1"
                width={60}
                height={60}
              />
              <h2 className="mt-3">Sherina Chaw</h2>
              <p className="mt-3">
                “I use this app since 2 years ago and <br /> this is the best
                app that I’ve ever use <br /> in my entire life”
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimony pb-4 pt-5 px-3 text-center">
              <Image
                src="/images/users2.png"
                alt="Users 2"
                width={60}
                height={60}
              />
              <h2 className="mt-3">Jessica Mera</h2>
              <p className="mt-3">
                “I use Zwallet to manage all financial <br /> needs. It’s super
                easy to use and it’s
                <br /> 100% free app”
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimony pb-4 pt-5 px-3 text-center">
              <Image
                src="/images/users3.png"
                alt="Users 3"
                width={60}
                height={60}
              />
              <h2 className="mt-3">Robert Chandler</h2>
              <p className="mt-3">
                “Since I’m using this app, I’m not <br /> going to move to
                another similar app. <br />
                Thank you Zwallet!”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
