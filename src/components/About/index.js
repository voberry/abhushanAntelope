import React from "react";
import AboutUs from "../../assets/images/aboutUs.jpg";
import { MDBCol, MDBRow } from "mdbreact";
import antelope from "../../assets/images/antelope.png";

const Index = () => {
  return (
    <div>
      <div
        className="page-header header-filter"
        data-parallax="true"
        style={{
          backgroundImage: `url(${AboutUs})`
        }}
      />
      <section className="p-5">
        <MDBRow className={"w-100"}>
          <MDBCol
            lg="4"
            className="text-center text-lg-left p-5"
            style={{
              position: "relative"
            }}
          >
            <img src={antelope} alt="" className={"w-100"} />
            <div
              style={{
                position: "absolute",
                height: "200",
                weight: "200"
              }}
            />
          </MDBCol>

          <MDBCol
            lg="8"
            className={"px-5 d-flex justify-content-center align-items-center"}
          >
            <div>
              <h2 className="h2-responsive mt-5 green-text text-uppercase">
                Change the way you travel!
              </h2>

              <hr />
              <h4 className={"h4-responsive font-weight-300 grey-text"}>
                Antelope Nepal is a travel platform focusing on providing a
                stress free, easy access and easy to build travel packages that
                our customers have full access on. This portal provides a
                platform for you; our customer to not only have the ability to
                create your dream destination trip in Nepal but to have the best
                possible site to research information on Nepal and provide you
                an easy access with our partner hotels, restaurants and
                vehicles.
              </h4>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default Index;
