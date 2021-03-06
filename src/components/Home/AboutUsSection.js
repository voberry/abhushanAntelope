import React from "react";
import { MDBIcon } from "mdbreact";
import { withRouter, Link } from "react-router-dom";
import antelope from "../../assets/images/antelope.png";
import search from "../../assets/images/search.png";
import customize from "../../assets/images/Customise.png";
import premadePackages from "../../assets/images/pre made packages.png";
import design from "../../assets/images/redesign.png";
import offYouGo from "../../assets/images/off-you-go.png";
import AboutUsImage from "../../assets/images/aboutUsSectionImage.jpg";
import Image1 from "../../assets/images/aboutUs.jpg";
import Image2 from "../../assets/images/Antelope Nepal (15 of 221).jpg";
import Image3 from "../../assets/images/Antelope Nepal (19 of 221).jpg";

const AboutUsSection = () => {
  return (
    <>
      <section className="container-fluid d-flex justify-content-around align-items-center mt-5 px-5 pb-5">
        <div className={"text-center"}>
          <h2 className="h2-responsive font-weight-bolder my-5 antelope-blue-light text-uppercase">
            How we work
          </h2>

          <div className={"row p-5"}>
            <div className="col">
              <img src={search} className="icon-images-lg" alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">
                Search
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className=" mb-md-0 mb-5 grey-text">
                So you’re ready to go on an adventure. Hop into Antelope Nepal
                and search for packages and services that you’re interested in
              </p>
            </div>
            <div className="col">
              <img src={premadePackages} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">
                Pre-made packages
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                Find Pre made Packages. These are tailored to be the best for
                you. Go through them and decide on one! And you’re ready!
              </p>
            </div>
            <div className="col">
              <img src={design} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">
                Re-design
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                Not satsified? Don’t worry, you can actually start taking pre
                made packages apart and customise them to be the best for you!
              </p>
            </div>
            <div className="col">
              <img src={customize} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase">
                customise
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                Still not happy? We’ve got you covered! Start using out unique
                system and start building your own holiday and compare prices!
              </p>
            </div>
            <div className="col">
              <img src={offYouGo} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase">
                off-you-go!
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                There you go! You’re ready! Save packages to your cart while we
                confirm. Once confirmed, you can check out and be on your way!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: `url(${AboutUsImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          height: "100vh"
        }}
      >
        <div className="full-bg-img">
          <div className="mask rgba-black-strong flex-center">
            <div className="container-fluid p-5 ">
              <h3 className="white-text text-center mt-5">
                Ready and Set for you to Fly Awesome Tours
              </h3>
              <div className="row w-100 mb-5 p-5 ">
                <div className="col-4 col-xs-12">
                  <div className="card flat-box-shadow hoverable-card">
                    <img
                      className="card-img-top fix-height"
                      src={Image1}
                      alt="Card cap"
                    />

                    <div className="card-body text-center">
                      <h4 className="card-title">
                        <p className="antelope-green text-uppercase">Hotels</p>
                      </h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link to={"/our-services/hotels"}>
                        <button className="btn antelope-green-bg btn-sm white-text">
                          BOOK NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-4 col-xs-12">
                  <div className="card flat-box-shadow hoverable-card">
                    <img
                      className="card-img-top fix-height"
                      src={Image2}
                      alt="Card cap"
                    />

                    <div className="card-body text-center">
                      <h4 className="card-title">
                        <p className="antelope-green text-uppercase">
                          Packages
                        </p>
                      </h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link to={"/our-services/packages"}>
                        <button className="btn antelope-green-bg btn-sm white-text">
                          BOOK NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                  {/* <svg
                    maxHeight="10rem"
                    width="100%"
                    style={{
                      transform: "scaleX(1.05)"
                    }}
                  >
                    <polygon
                      points="0,0 150,0 75,110"
                      style={{
                        fill: "white",
                        stroke: "white",
                        strokeWidth: "1",
                        transform: "scaleX(2.31) scaleY(0.8) translateY(10px)"
                      }}
                    />
                  </svg> */}
                </div>
                <div className="col-4 col-xs-12">
                  <div className="card flat-box-shadow hoverable-card">
                    <img
                      className="card-img-top fix-height"
                      src={Image3}
                      alt="Card cap"
                    />

                    <div className="card-body text-center">
                      <h4 className="card-title">
                        <p className="antelope-green text-uppercase">Trek</p>
                      </h4>
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>

                      <Link to={"/our-services/treks"}>
                        <button className="btn antelope-green-bg btn-sm white-text">
                          BOOK NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(AboutUsSection);
