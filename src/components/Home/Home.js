import React, { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Tabs,
  Spin
} from "antd";

import { withRouter, Link } from "react-router-dom";
import moment from "moment";
import { MDBAnimation, MDBCol } from "mdbreact";

import locationOptions from "../../services/__mocks__/locations";
import Package from "./Package";
import { isEmpty } from "../../utils/commonUtil";
import PredefinedPackages from "./PredefinedPackages";
import LocationMap from "./LocationMap";
import LocationInfo from "./LocationInfo";
import AboutUsSection from "./AboutUsSection";
import LocationsContextProvider from "../Contexts/LocationsContext";

import animal from "../../assets/images/animal.png";
import temple from "../../assets/images/temple.png";
import party from "../../assets/images/party.png";
import HomepageBG from "../../assets/images/homepage.jpg";

const { Option } = Select;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const Home = props => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { form, fetchLocations, locations } = props;
  const { validateFields, getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      // if (!err) {
      values.checkIn = values.checkIn
        ? moment(values.checkIn).format("MM-DD-YYYY")
        : null;
      values.checkOut = values.checkOut
        ? moment(values.checkOut).format("MM-DD-YYYY")
        : null;
      setIsSubmitted(true);
      fetchLocations();
      // }
    });
  };

  const handleLocationClick = title => {
    document.getElementById(`${title}`).scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  const handleDaysToggle = title => {
    document.getElementById(`${title}-days`).style.display = "none";
    document.getElementById(`${title}-days-editable`).style.display = "block";
  };

  const handleDaysFormToggle = title => {
    document.getElementById(`${title}-days`).style.display = "block";
    document.getElementById(`${title}-days-editable`).style.display = "none";
  };

  const handleLocationsSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      console.log(values);
    });
  };

  const handleScrollToView = () => {
    document.getElementById("how-we-work-section-scroller").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <MDBAnimation type="fadeIn" duration="1s">
      <div
        style={{
          height: "100%",
          marginTop : '-100px'
        }}
      >
        <div
          className="home-view intro-2"
          style={{ backgroundImage: `url(${HomepageBG})` }}
        >
          <div className="full-bg-img">
            <div className="mask rgba-black-light flex-center">
              <div
                className={` text-center home-transition-before home-flex-center ${isSubmitted &&
                  "home-transition-after home-flex-end"}`}
              >
                <div>
                  <h2
                    className={
                      !isSubmitted ? `h1-responsive h1-lg primary-font` : `hide`
                    }
                  >
                    Adventures you dream of.
                  </h2>
                  <h2
                    className={
                      !isSubmitted ? `h1-responsive h1-lg primary-font` : `hide`
                    }
                  >
                    With us.
                  </h2>
                  <br />
                  <h6
                    className={
                      !isSubmitted
                        ? `text-center px-5 mx-5 white-text `
                        : `hide`
                    }
                  >
                    With Antelope Nepal, you can create the holidays you dream
                    of from the click of your mouse, on the go. And we do it
                    according to your tastes.{" "}
                  </h6>

                  <div className="container-fluid">
                    {!isSubmitted && (
                      <div className={"my-5"}>
                        <h3 className={" white-text text-uppercase"}>
                          Start your journey
                        </h3>
                        <hr className={"white w-25"} />
                      </div>
                    )}
                    <Form
                      layout="inline"
                      onSubmit={handleSubmit}
                      className={"main-page-form"}
                    >
                      <div className="row">
                        <div className="col-2">
                          <small id="from" className="form-text white-text">
                            Where are you from
                          </small>
                          {getFieldDecorator("from", {
                            rules: [
                              {
                                required: true,
                                message: "This is required"
                              }
                            ]
                          })(
                            <Select showSearch placeholder={"Select Location"}>
                              {locationOptions &&
                                locationOptions.locations.data.map(item => (
                                  <Option key={item.code} value={item.title}>
                                    {item.title}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </div>
                        <div className="col-2">
                          <small id="from" className="form-text white-text">
                            Where do you want to go?
                          </small>
                          {getFieldDecorator("to", {
                            rules: [
                              {
                                required: true,
                                message: "This is required"
                              }
                            ]
                          })(
                            <Select showSearch placeholder={"Select Location"}>
                              {locationOptions &&
                                locationOptions.locations.data.map(item => (
                                  <Option key={item.code} value={item.title}>
                                    {item.title}
                                  </Option>
                                ))}
                            </Select>
                          )}
                        </div>
                        <div className="col-3">
                          <small id="from" className="form-text white-text">
                            When are the dates?
                          </small>
                          {getFieldDecorator("checkIn", {
                            rules: [
                              {
                                required: true,
                                message: "This is required"
                              }
                            ]
                          })(<RangePicker className={"w-100"} />)}
                        </div>
                        <div className="col">
                          <small id="to" className="form-text white-text">
                            Number of adults
                          </small>
                          {getFieldDecorator("adults", {
                            rules: [
                              {
                                required: true,
                                message: "This is required"
                              }
                            ]
                          })(<InputNumber min={0} className="form-control" />)}
                        </div>
                        <div className="col">
                          <small id="to" className="form-text white-text">
                            Any Children?
                          </small>
                          {getFieldDecorator("children", {
                            rules: [
                              {
                                required: true,
                                message: "This is required"
                              }
                            ]
                          })(<InputNumber min={0} className="form-control" />)}
                        </div>
                        <div className="col">
                          <small id="to" className="form-text white-text">
                            Select the class of trip.
                          </small>
                          {getFieldDecorator("class", {
                            initialValue: "moderate",
                            rules: [
                              {
                                required: true,
                                message: "This is required"
                              }
                            ]
                          })(
                            <Select showSearch>
                              <Option value="economy">Economy</Option>
                              <Option value="moderate">Moderate</Option>
                              <Option value="premium">Premium</Option>
                            </Select>
                          )}
                        </div>
                        <div className="col">
                          <Button
                            htmlType="submit"
                            className={"mt-3 btn-sm antelope-green-bg w-100"}
                          >
                            LETS GO!
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>

              {!isSubmitted && (
                <div className="arrow" onClick={handleScrollToView}>
                  <span />
                  <span />
                </div>
              )}
            </div>
          </div>
        </div>

        {isSubmitted && (
          <MDBAnimation type="fadeIn" duration="1s" delay="1.5s">
            <div className={"container-fluid p-5"}>
              <div className="px-5 mx-5">
                <div>
                  <div className="d-flex justify-content-around align-items-center">
                    {!isEmpty(locations) &&
                      locations.map(item => (
                        <div className="text-center">
                          <div>
                            <img
                              src={
                                item.icon === "animal"
                                  ? animal
                                  : item.icon === "party"
                                  ? party
                                  : temple
                              }
                              alt=""
                              style={{ cursor: "pointer" }}
                              onClick={() => handleLocationClick(item.title)}
                              className="icon-images hoverable-card"
                            />
                            <h5 className="font-weight-bolder my-2 antelope-green">
                              {item.title}
                            </h5>
                            <h6 className="font-weight-bolder my-2 antelope-green">
                              <div
                                onClick={() => handleDaysToggle(item.title)}
                                id={`${item.title}-days`}
                              >
                                {item.day}
                              </div>
                              <div
                                id={`${item.title}-days-editable`}
                                style={{ display: "none" }}
                              >
                                {getFieldDecorator(`${item.title}[days]`, {
                                  initialValue: item.day,
                                  rules: [
                                    {
                                      required: true,
                                      message: "This is required"
                                    }
                                  ]
                                })(
                                  <input
                                    className="form-control"
                                    onBlur={() =>
                                      handleDaysFormToggle(item.title)
                                    }
                                  />
                                )}
                              </div>
                            </h6>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-around flex-fill mx-5 my-5 ">
                <div className="row w-100">
                  <div className="col-sm-12 col-md-3 p-0">
                    <Tabs
                      defaultActiveKey="premade"
                      className={"nav-justified nav-pills home-nav-tabs"}
                    >
                      <TabPane
                        tab="Premade Packages"
                        key="premade"
                        className={"mr-0"}
                      >
                        <PredefinedPackages />
                      </TabPane>
                      <TabPane tab="Customized" key="custom">
                        <div className={"card z-depth-4"}>
                          <div className="card-body">
                            <Package />
                          </div>
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>

                  <div
                    className="col-sm-12 col-md-9"
                    style={{
                      height: "400px"
                    }}
                  >
                    <LocationMap location={locations} />
                  </div>
                </div>
              </div>
            </div>

            <div className={"d-flex justify-content-center align-items-center"}>
              <div>
                <h2 className="font-weight-bolder mb-1 primary-font antelope-green">
                  Customize your trip
                </h2>
                <hr className={"text-center w-25 antelope-green-bg"} />
              </div>
            </div>

            <LocationsContextProvider>
              <Form layout="inline" onSubmit={handleLocationsSubmit}>
                {locations &&
                  locations.map((item, index) => (
                    <LocationInfo location={item} index={index} form={form} />
                  ))}

                <div
                  className={
                    "d-flex justify-content-center align-items-center mt-2"
                  }
                >
                  <div>
                    <button
                      type="button"
                      className="btn btn-flat btn-lg antelope-green-bg"
                    >
                      Submit and Go !
                    </button>
                  </div>
                </div>
              </Form>
            </LocationsContextProvider>
          </MDBAnimation>
        )}
        <div id="how-we-work-section-scroller" />
        <div>
          <AboutUsSection className={"mt-5"} />
        </div>
      </div>
    </MDBAnimation>
  );
};

export default Form.create()(withRouter(Home));
