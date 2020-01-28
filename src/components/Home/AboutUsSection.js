import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { withRouter, Link } from "react-router-dom";
import antelope from "../../assets/images/antelope.png";
import search from "../../assets/images/search.png";
import customize from "../../assets/images/customize.png";
import design from "../../assets/images/design.png";
import checkout from "../../assets/images/checkout.png";
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

          <MDBRow className={"p-5"}>
            <MDBCol md="3">
              <img src={search} className="icon-images-lg" alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">
                Search
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className=" mb-md-0 mb-5 grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
            <MDBCol md="3">
              <img src={customize} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">
                Customize
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
            <MDBCol md="3">
              <img src={design} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase">
                Design
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
            <MDBCol md="3">
              <img src={checkout} className={"icon-images-lg"} alt="" />
              <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase">
                Checkout
              </h5>
              <hr className={"text-center w-25 antelope-green-bg"} />
              <p className="mb-md-0 mb-5 grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores aperiam minima assumenda deleniti hic.
              </p>
            </MDBCol>
          </MDBRow>
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
              <div className="row w-100 no-gutters mb-5 p-5 ">
                <div className="col-4 col-xs-12">
                  <div
                    className="card flat-box-shadow"
                    style={{
                      transform: "scale(0.95)"
                    }}
                  >
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
                  <div
                    className="card flat-box-shadow"
                    style={{
                      transform: "scale(1.05)"
                    }}
                  >
                    <img
                      className="card-img-top fix-height-middle"
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
                  <div
                    className="card flat-box-shadow"
                    style={{
                      transform: "scale(0.95)"
                    }}
                  >
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

                      <Link to={"/our-services/trips"}>
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
