import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import StickyBox from "react-sticky-box";
import HotelsCarousel from "./HotelsCarousel";
import HotelsLocation from "./HotelLocation";

import Wallpaper from "../../../assets/images/wallpaper.jpg";
import {MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane} from "mdbreact";
import {Button, DatePicker, Form, Input, InputNumber, Select} from "antd";
import locationOptions from "../../../services/__mocks__/locations";

const imageStyle = {
    height: '100px',
    width: '150px',
    borderRadius: '10%'
};

const tabStyles = {
    background: '#809086',
    color: 'white',
    padding: '10px',
    textDecoration: 'underline',
}
const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;

const Hotel = (props) => {
    const {form} = props;
    const {
        getFieldDecorator,
        getFieldValue,
        validateFields,
        resetFields
    } = form;
    const [activeItem, setActiveItem] = useState('hotelDetails');

    const handleViewDetailsButtonClick = (index, locationName) => {
        let ishidden = document.getElementById(`${locationName}`).style.display;
        ishidden === 'none' ?
            document.getElementById(`${locationName}`).style.display = 'table-row' :
            document.getElementById(`${locationName}`).style.display = 'none'
    };

    const toggleTabs = tab => {
        setActiveItem(tab);
    };

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
            }
        });
    };

    const handleReset = () => {
        resetFields();
    };

    return (
        <div className="mt-5 pt-5">
            <div className={"gray-background"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 p-5">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <h3 className={"h3-responsive antelope-green"}>Hotel 1</h3>
                                    <h6 className={"grey-text small"}>
                                        <i className="fas fa-map-marked-alt fa-sm red-text pr-2"/>
                                        Kapan, Kathmandu, Nepal
                                    </h6>
                                </div>

                                <div className="col-md-3 col-sm-12 ">
                                    <button
                                        className={
                                            "btn antelope-green-bg-light white-text white-text btn-sm float-right mt-3"
                                        }
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <div className={"z-depth-4 thumbnailCarousels"}>
                                        <HotelsCarousel/>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <HotelsLocation/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <MDBNav
                                        className="nav-tabs mt-5 d-flex justify-content-between align-items-center"
                                        style={tabStyles}>
                                        <MDBNavItem>
                                            <a className={`nav-link px-5 ${activeItem === 'hotelDetails' ? 'active' : 'not-active'}`}
                                               active={activeItem === 'hotelDetails'}
                                               onClick={() => toggleTabs("hotelDetails")} role="tab">
                                                Hotel Details
                                            </a>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <a className={`nav-link px-5 ${activeItem === 'amenities' ? 'active' : 'not-active'}`}
                                               active={activeItem === 'amenities'}
                                               onClick={() => toggleTabs("amenities")} role="tab">
                                                Amenities
                                            </a>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <a className={`nav-link px-5 ${activeItem === 'policies' ? 'active' : 'not-active'}`}
                                               active={activeItem === 'policies'}
                                               onClick={() => toggleTabs("policies")} role="tab">
                                                Policies
                                            </a>
                                        </MDBNavItem>
                                    </MDBNav>
                                    <MDBTabContent activeItem={activeItem} className={'p-0 '}>

                                        <MDBTabPane tabId="hotelDetails" role="tabPanel">
                                            <div className="card p-3 flat-box-shadow ">
                                                <h4 className="font-weight-bolder mb-3 antelope-green h4-responsive">
                                                    <strong>Kathmandu</strong>
                                                </h4>

                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Aliquid delectus enim eum harum quae tenetur,
                                                    ullam? Ab adipisci aut culpa earum perspiciatis porro
                                                    quis quisquam reiciendis velit veritatis, voluptas
                                                    voluptates? Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Accusamus animi, commodi doloribus
                                                    magnam magni modi placeat quia quidem sint ut!
                                                    Asperiores consectetur dolores, eos itaque magni omnis
                                                    quisquam reprehenderit voluptatum!
                                                    <br/>
                                                </p>
                                            </div>
                                        </MDBTabPane>
                                        <MDBTabPane tabId="amenities" role="tabPanel">
                                            <div className="card p-3 flat-box-shadow ">
                                                <p className="mt-2">
                                                    Amenities
                                                </p>
                                            </div>
                                        </MDBTabPane>
                                        <MDBTabPane tabId="policies" role="tabPanel">
                                            <div className="card p-3 flat-box-shadow ">
                                                <p className="mt-2">
                                                    Policies
                                                </p>
                                            </div>
                                        </MDBTabPane>

                                    </MDBTabContent>
                                </div>
                            </div>

                            <div className="card w-100 p-3 mt-5">
                                <div className="container">

                                    <h4 className="card-title font-weight-bold antelope-green"><a>Rooms</a>
                                    </h4>
                                    <Form layout="inline" onSubmit={handleSubmit}>
                                        <div className="mt-3 d-flex flex-fill">
                                            <div className="px-1">
                                                <FormItem label={"Dates"}>
                                                    {getFieldDecorator("checkIn", {})(<RangePicker className={"w-100"}
                                                                                                   style={{width: 200}}/>)}
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
                                                <FormItem label={"No. of Children"}>
                                                    {getFieldDecorator("childrenCount", {
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
                            <div className={'card mt-5'}>
                                <div className="card-body">
                                    <h4 className="card-title font-weight-bold antelope-green"><a>Available Rooms</a>
                                    </h4>
                                    <table className="table table-borderless table-striped">
                                        <thead>
                                        <tr>
                                            <th />
                                            <th />
                                            <th />
                                            <th />
                                            <th />
                                            <th />
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className={'w-25'}>
                                                <img
                                                    src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                        Math.random() * 100
                                                    )}.jpg`}
                                                    alt=""
                                                    className={'img-fluid z-depth-4'}
                                                    style={imageStyle}
                                                />
                                            </th>
                                            <td className={'w-25'}><h4 className={'font-weight-bold mb-1'}>Kathmandu
                                                Room</h4>
                                                <h6 className={'font-weight-bold grey-text'}>
                                                    Adults 2, Child 1
                                                </h6>
                                                <div className="row">
                                                    <div className="col-xs-6 col-md-5 go-right">
                                                        <p>No. Rooms</p>
                                                    </div>
                                                    <div className="col-xs-6 col-md-4 go-left">
                                                        <select className="browser-default custom-select w-100">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className={'btn antelope-green-bg btn-sm'}
                                                        onClick={() => handleViewDetailsButtonClick(1, 'room1')}>
                                                    View Details
                                                </button>
                                            </td>
                                            <td><h2>
                                                <small>NPR </small> <strong>रू2,750</strong>
                                            </h2></td>
                                            <td>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input"
                                                           id="materialUnchecked"/>
                                                    <label className="form-check-label" htmlFor="materialUnchecked"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{display: 'none'}} id={'room1'}>
                                            <td colSpan={5}>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input"
                                                           id="defaultInline1"
                                                           name="inlineDefaultRadiosExample"/>
                                                    <label className="custom-control-label" htmlFor="defaultInline1">Bed
                                                        and BreakFast</label>
                                                </div>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input"
                                                           id="defaultInline2"
                                                           name="inlineDefaultRadiosExample"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="defaultInline2">MAP</label>
                                                </div>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input"
                                                           id="defaultInline3"
                                                           name="inlineDefaultRadiosExample"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="defaultInline3">AP</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className={'w-25'}>
                                                <img
                                                    src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                        Math.random() * 100
                                                    )}.jpg`}
                                                    alt=""
                                                    className={'img-fluid z-depth-4'}
                                                    style={imageStyle}
                                                />
                                            </th>
                                            <td><h4 className={'font-weight-bold mb-1'}>Double Deluxe Room</h4>
                                                <h6 className={'font-weight-bold grey-text'}>
                                                    Adults 2, Child 1
                                                </h6>
                                                <div className="row">
                                                    <div className="col-xs-6 col-md-5 go-right">
                                                        <p>No. Rooms</p>
                                                    </div>
                                                    <div className="col-xs-6 col-md-4 go-left">
                                                        <select className="browser-default custom-select w-100">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className={'btn antelope-green-bg btn-sm'}
                                                        onClick={() => handleViewDetailsButtonClick(1, 'room2')}>
                                                    View Details
                                                </button>
                                            </td>
                                            <td><h2>
                                                <small>NPR </small> <strong>रू2,750</strong>
                                            </h2></td>
                                            <td>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input"
                                                           id="materialUnchecked2"/>
                                                    <label className="form-check-label" htmlFor="materialUnchecked2"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{display: 'none'}} id={'room2'}>
                                            <td colSpan={5}>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input"
                                                           id="defaultInline1"
                                                           name="inlineDefaultRadiosExample"/>
                                                    <label className="custom-control-label" htmlFor="defaultInline1">Bed
                                                        and BreakFast</label>
                                                </div>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input"
                                                           id="defaultInline2"
                                                           name="inlineDefaultRadiosExample"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="defaultInline2">MAP</label>
                                                </div>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" className="custom-control-input"
                                                           id="defaultInline3"
                                                           name="inlineDefaultRadiosExample"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="defaultInline3">AP</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={'w-25'}>
                                                <img
                                                    src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                        Math.random() * 100
                                                    )}.jpg`}
                                                    alt=""
                                                    className={'img-fluid z-depth-4'}
                                                    style={imageStyle}
                                                />
                                            </td>
                                            <td><h4 className={'font-weight-bold mb-1'}>Kathmandu Room</h4>
                                                <h6 className={'font-weight-bold grey-text'}>
                                                    Adults 2, Child 1
                                                </h6>
                                                <div className="row">
                                                    <div className="col-xs-6 col-md-5 go-right">
                                                        <p>No. Rooms</p>
                                                    </div>
                                                    <div className="col-xs-6 col-md-4 go-left">
                                                        <select className="browser-default custom-select w-100">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className={'btn antelope-green-bg btn-sm'}
                                                        onClick={() => handleViewDetailsButtonClick(1, 'room3')}>
                                                    View Details
                                                </button>
                                            </td>
                                            <td><h2>
                                                <small>NPR </small> <strong>रू2,750</strong>
                                            </h2></td>
                                            <td>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input"
                                                           id="materialUnchecked3"/>
                                                    <label className="form-check-label" htmlFor="materialUnchecked3"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style={{display: 'none'}} id={'room3'} >
                                                <td colSpan='5'>
                                                    <h5>About Hotel</h5>
                                                        <div className="d-flex ">
                                                            <div className="px-3">
                                                                Meal Options
                                                            </div>
                                                            <div className="px-3">
                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input type="radio" className="custom-control-input"
                                                                           id="defaultInline1"
                                                                           name="inlineDefaultRadiosExample"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="defaultInline1">Bed and BreakFast</label>
                                                                </div>

                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input type="radio" className="custom-control-input"
                                                                           id="defaultInline2"
                                                                           name="inlineDefaultRadiosExample"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="defaultInline2">MAP</label>
                                                                </div>

                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input type="radio" className="custom-control-input"
                                                                           id="defaultInline3"
                                                                           name="inlineDefaultRadiosExample"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="defaultInline3">AP</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div
                                className={
                                    "p-4 mt-4"
                                }
                            >
                                <h4>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input"
                                               id="esewa"
                                               name="inlineDefaultRadiosExample"/>
                                        <label className="custom-control-label"
                                               htmlFor="esewa">E-sewa</label>
                                    </div>

                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input"
                                               id="ipsPayment"
                                               name="inlineDefaultRadiosExample"/>
                                        <label className="custom-control-label"
                                               htmlFor="ipsPayment">IPS payment</label>
                                    </div>

                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input"
                                               id="paymentNepal"
                                               name="inlineDefaultRadiosExample"/>
                                        <label className="custom-control-label"
                                               htmlFor="paymentNepal">Payment Nepal</label>
                                    </div>
                                    <button className={"btn btn-lg antelope-green-bg float-right"}>
                                        Checkout
                                    </button>
                                </h4>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-2 p-5 px-2">
                            <Link to={"/blogs"}>Other Hotels in this area</Link>
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
        </div>
    );
};

export default Form.create()(withRouter(Hotel));
