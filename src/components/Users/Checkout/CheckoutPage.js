import React from 'react';
import {Form, Input, Select} from 'antd';
import {withRouter, Link} from 'react-router-dom'
import {MDBTable, MDBTableBody, MDBTableHead, MDBInput} from "mdbreact";
import {Popover, OverlayTrigger} from "react-bootstrap";
import AboutUs from '../../../assets/images/aboutUs.jpg'
import locationOptions from "../../../services/__mocks__/locations";

const CheckoutPage = () => {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
            </Popover.Content>
        </Popover>
    );

    return (
        <div className={'gray-background'}>
            <div
                className="page-header header-filter"
                data-parallax="true"
                style={{
                    backgroundImage: `url(${AboutUs})`
                }}
            />

            <div className={'container-fluid p-5 w-100'}>
                <div className="d-flex align-items-stretch justify-content-around">
                    <div className={'mr-5 w-100 itinerary-card'}  style={{minHeight: '100%'}}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className={'font-weight-bolder antelope-green text-center'}>Itinerary
                                    Information</h4>
                                <div className="list-group">
                                    <a
                                        className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Day 1: Kathmandu</h5>
                                            <small>3 days</small>
                                        </div>
                                        <p className="mb-1">
                                            <div className="row">
                                                <div className="col-3">
                                                    Transportation :
                                                </div>

                                                <div className="col-9">
                                                    1 . Vehicles
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-3">
                                                    Hotels :
                                                </div>

                                                <div className="col-9">
                                                    1 . ABC Hotels
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-3">
                                                    Activities :
                                                </div>

                                                <div className="col-9">
                                                    1 . ABC Activies <br/>
                                                    2. ABC Activities
                                                </div>
                                            </div>
                                        </p>
                                        <small>Donec id elit non mi porta.</small>
                                    </a>
                                    <a
                                        className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Day 1: Kathmandu</h5>
                                            <small className="text-muted">3 days</small>
                                        </div>
                                        <p className="mb-1">
                                            <div className="row">
                                                <div className="col-3">
                                                    Transportation :
                                                </div>

                                                <div className="col-9">
                                                    1 . Vehicles
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-3">
                                                    Hotels :
                                                </div>

                                                <div className="col-9">
                                                    1 . ABC Hotels
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-3">
                                                    Activities :
                                                </div>

                                                <div className="col-9">
                                                    1 . ABC Activies <br/>
                                                    2. ABC Activities
                                                </div>
                                            </div>
                                        </p>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                    <a
                                        className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">Day 1: Kathmandu</h5>
                                            <small className="text-muted">3 days</small>
                                        </div>
                                        <p className="mb-1">
                                            <div className="row">
                                                <div className="col-3">
                                                    Transportation :
                                                </div>

                                                <div className="col-9">
                                                    1 . Vehicles
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-3">
                                                    Hotels :
                                                </div>

                                                <div className="col-9">
                                                    1 . ABC Hotels
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <div className="col-3">
                                                    Activities :
                                                </div>

                                                <div className="col-9">
                                                    1 . ABC Activies <br/>
                                                    2. ABC Activities
                                                </div>
                                            </div>
                                        </p>
                                        <small className="text-muted">Donec id elit non mi porta.</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'w-50'} style={{minHeight: '100%'}}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className={'font-weight-bolder antelope-green text-center'}>Tour Information</h4>

                                <MDBTable>
                                    <MDBTableHead bordered={false}>
                                        <tr className={'text-center'}>
                                            <th>City</th>
                                            <th>Days</th>
                                            <th colSpan={2}>
                                            </th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr className={'text-center'}>
                                            <td>Pokhara</td>
                                            <td>3</td>
                                            <td colSpan={2}>
                                                <span className={'px-3'}>2000</span>
                                                <input type="checkbox" className="form-check-input"
                                                       id="materialUnchecked1"/>
                                                <label className="form-check-label" htmlFor="materialUnchecked1"/>
                                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                                            <span>
                                                               <i className="fas fa-question-circle antelope-green"/>  Assisted
                                                            </span>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                        <tr className={'text-center'}>
                                            <td>Kathmandu</td>
                                            <td>2</td>
                                            <td colSpan={2}>
                                                <span className={'px-3'}>2000</span>
                                                <input type="checkbox" className="form-check-input"
                                                       id="materialUnchecked2"/>
                                                <label className="form-check-label" htmlFor="materialUnchecked2"/>
                                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                                            <span>
                                                               <i className="fas fa-question-circle antelope-green"/>  Assisted
                                                            </span>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                        <tr className={'text-center'}>
                                            <td>Chitwan</td>
                                            <td>4</td>
                                            <td colSpan={2}>
                                                <span className={'px-3'}>2000</span>
                                                <input type="checkbox" className="form-check-input"
                                                       id="materialUnchecked3"/>
                                                <label className="form-check-label" htmlFor="materialUnchecked3"/>
                                                <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                                            <span>
                                                               <i className="fas fa-question-circle antelope-green"/>  Assisted
                                                            </span>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>

                                <br/>
                                <hr/>
                                Promo Code : VN2020 (13%) <br/>
                                Total : 6300 <br/>
                                Grand Total : 6,800 <br/>
                                Points Earned : 136 points
                            </div>
                        </div>

                        <div className="card mt-4 p-1">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="termsOfConditions"/>
                                <label className="form-check-label" htmlFor="termsOfConditions">
                                </label>
                                <span>
                                     Terms & Conditions
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className={'font-weight-bolder antelope-green'}>Point of Contact</h4>

                                <div className={'row mb-4'}>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Contact No.</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>

                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Nationality</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                </div>

                                <div className={'row mb-4'}>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Contact No.</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>

                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Nationality</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                </div>

                                <div className={'row mb-4'}>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Contact No.</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>

                                    <div className="col-sm-3">
                                        <label htmlFor="exampleInputEmail1">Nationality</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                </div>

                                <button className={'btn antelope-green-bg white-text'}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className={'font-weight-bolder antelope-green'}>Comments</h4>

                                <div className="form-group">
                                    <textarea className="form-control" rows="5" id="comment"/>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                           value="option1"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">E-Sewa</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                           value="option2"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">IPS</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                           value="option3"/>
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">IME Pay</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <button className={'btn antelope-green-bg white-text'}>
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form.create()(withRouter(CheckoutPage))