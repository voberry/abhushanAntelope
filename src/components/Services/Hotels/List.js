import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {Button, DatePicker, Form, Input, InputNumber, Select} from "antd";
import StickyBox from "react-sticky-box";
import Wallpaper from "../../../assets/images/wallpaper.jpg";
import PredefinedPackages from "./../../Home/PredefinedPackages";
import locationOptions from "../../../services/__mocks__/locations";
import HotelBG from "../../../assets/images/hotels.jpg";
import {MDBAnimation} from "mdbreact";

const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;

const List = props => {
    const {form} = props;
    const {
        getFieldDecorator,
        getFieldValue,
        validateFields,
        resetFields
    } = form;
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                setIsFormSubmitted(true);
            }
        });
    };

    const handleReset = () => {
        resetFields();
    };

    return (
        <MDBAnimation type="fadeIn" duration="1s">
            <div className={"gray-background "}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 p-5">
                            <h5 className={"h5-responsive antelope-green"}>
                                Search for your preferred hotels.
                            </h5>
                            <div className="card w-100 p-3">
                                <div className="container">
                                    <Form layout="inline" onSubmit={handleSubmit}>
                                        <div className="mt-3 d-flex flex-fill">
                                            <div className="px-1">
                                                <FormItem label={"Hotel Name"}>
                                                    {getFieldDecorator("hotelName", {})(
                                                        <Input
                                                            className={"form-control w-100"}
                                                        />
                                                    )}
                                                </FormItem>

                                            </div>
                                            <div className="px-1">
                                                <FormItem label={"City"}>
                                                    {getFieldDecorator("city", {})(
                                                        <Select
                                                            style={{width: 120}}
                                                            showSearch
                                                            placeholder={"Select Location"}
                                                        >
                                                            {locationOptions &&
                                                            locationOptions.locations.data.map(item => (
                                                                <Option key={item.code} value={item.title}>
                                                                    {item.title}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    )}
                                                </FormItem>
                                            </div>
                                            <div className="px-1">
                                                <FormItem label={"Dates"}>
                                                    {getFieldDecorator("checkIn", {
                                                    })(<RangePicker className={"w-100"} style={{width: 200}}/>)}
                                                </FormItem>
                                            </div>
                                            <div className="px-1">
                                                <FormItem label={"No. of People"}>
                                                    {getFieldDecorator("peopleCount", {
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "This is required"
                                                            }
                                                        ]
                                                    })(
                                                        <InputNumber
                                                            className={"form-control w-100"}
                                                            min={0}
                                                        />
                                                    )}
                                                </FormItem>

                                            </div>
                                            <div className="px-1">
                                                <FormItem label={"Rates"}>
                                                    {getFieldDecorator("rates", {
                                                        initialValue: "moderate",
                                                        rules: [
                                                            {
                                                                required: true,
                                                                message: "This is required"
                                                            }
                                                        ]
                                                    })(
                                                        <Select style={{width: 120}} showSearch>
                                                            <Option value="economy">Economy</Option>
                                                            <Option value="moderate">Moderate</Option>
                                                            <Option value="premium">Premium</Option>
                                                        </Select>
                                                    )}
                                                </FormItem>
                                            </div>
                                            <div className="px-1">
                                                <Button
                                                    htmlType="submit"
                                                    className={
                                                        "mt-5 btn-success antelope-green-bg-light white-text  w-100"
                                                    }
                                                >
                                                    Search!
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>

                            {isFormSubmitted && (
                                <div>
                                    <div className={"w-100 dotted-borders mt-3"}>
                                        <h5 className={"h5-responsive antelope-green"}>
                                            Our Recommendations
                                        </h5>

                                        <div className={"row"}>
                                            <div className="col-md-4">
                                                <PredefinedPackages/>
                                            </div>

                                            <div className="col-md-4">
                                                <PredefinedPackages/>
                                            </div>

                                            <div className="col-md-4">
                                                <PredefinedPackages/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className={"w-100 mt-3"}>
                                <div className="row d-flex align-items-stretch">
                                    <div className={"col-sm-12 col-md-3 my-2"}>
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                    Math.random() * 100
                                                )}.jpg`}
                                                alt="Card image cap"
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title antelope-green">
                                                    <a>Random Hotel</a>
                                                </h6>
                                                <Link to={`./hotels/123`}>
                                                    <button
                                                        className="btn antelope-green-bg-light white-text btn-sm white-text p-2">
                                                        View
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"col-sm-12 col-md-3 my-2"}>
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                    Math.random() * 100
                                                )}.jpg`}
                                                alt="Card image cap"
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title antelope-green">
                                                    <a>Random Hotel</a>
                                                </h6>
                                                <Link to={`./hotels/123`}>
                                                    <button
                                                        className="btn antelope-green-bg-light white-text btn-sm white-text p-2">
                                                        View
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"col-sm-12 col-md-3 my-2"}>
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                    Math.random() * 100
                                                )}.jpg`}
                                                alt="Card image cap"
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title antelope-green">
                                                    <a>Random Hotel</a>
                                                </h6>
                                                <Link to={`./hotels/123`}>
                                                    <button
                                                        className="btn antelope-green-bg-light white-text btn-sm white-text p-2">
                                                        View
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"col-sm-12 col-md-3 my-2"}>
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                    Math.random() * 100
                                                )}.jpg`}
                                                alt="Card image cap"
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title antelope-green">
                                                    <a>Random Hotel</a>
                                                </h6>
                                                <Link to={`./123`}>
                                                    <button
                                                        className="btn antelope-green-bg-light white-text btn-sm white-text p-2">
                                                        View
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-2 p-5 px-2">
                            <Link to={"/blogs"}>View our Blogs</Link>
                            <StickyBox offsetTop={100}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                        <div className="card mb-3">
                                            <div className="card-title antelope-green">
                                                <img src={Wallpaper} alt="" className={"w-100"}/>
                                            </div>

                                            <div className="card-body grey-text ">Ad stuff</div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-title antelope-green">
                                                <img src={Wallpaper} alt="" className={"w-100"}/>
                                            </div>

                                            <div className="card-body grey-text ">Ad stuff</div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-title antelope-green">
                                                <img src={Wallpaper} alt="" className={"w-100"}/>
                                            </div>

                                            <div className="card-body grey-text ">Ad stuff</div>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>
        </MDBAnimation>
    );
};

export default Form.create()(withRouter(List));
