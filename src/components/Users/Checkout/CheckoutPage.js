import React from 'react';
import {Form} from 'antd';
import {withRouter, Link} from 'react-router-dom'
import {MDBTable, MDBTableBody, MDBTableHead, MDBInput} from "mdbreact";
import {Popover, OverlayTrigger} from "react-bootstrap";

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
            <div className={'container-fluid p-5 w-100'}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card itinerary-card">
                            <div className="card-body">
                                <h4 className={'font-weight-bolder antelope-green text-center'}>Itinerary Information</h4>

                                <hr className={'w-75 text-center'}/>
                                <ul style={{
                                    listStyleType : 'none'
                                }}>
                                    <li className={'p-2'}>
                                        I ain't happy, I'm feeling glad.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        I got sunshine, in a bag.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        I'm useless, but not for long.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        The future is coming on.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        Its' coming on.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        Its' coming on.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        Its' coming on.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        Its' coming on.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>

                                    <li className={'p-2'}>
                                        Its' coming on.
                                        <small className={'text-muted float-right'}>
                                            day 1
                                        </small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className={'font-weight-bolder antelope-green text-center'}>Tour Information</h4>

                                <hr className={'w-75 text-center'}/>

                                <MDBTable>
                                    <MDBTableHead bordered={false}>
                                        <tr className={'text-center'}>
                                            <th>Location</th>
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
                                                <MDBInput label="Assisted" filled type="checkbox" id="checkbox1" />
                                                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                    <button className={'btn antelope-green btn-rounded btn-sm'}>
                                                        <i className="fas fa-question-circle antelope-green" />
                                                    </button>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                        <tr className={'text-center'}>
                                            <td>Kathmandu</td>
                                            <td>2</td>
                                            <td colSpan={2}>
                                                <MDBInput label="Assisted" filled type="checkbox" id="checkbox2" />
                                                <i className="fas fa-question-circle antelope-green"></i>

                                            </td>
                                        </tr>
                                        <tr className={'text-center'}>
                                            <td>Chitwan</td>
                                            <td>4</td>
                                            <td colSpan={2}>
                                                    <MDBInput label="Assisted" filled type="checkbox" id="checkbox3" className={'d-inline-block'}/>

                                                    <i className="fas fa-question-circle"></i>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-body">
                                guide checkbox
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                guest additional info that gets added.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                               additional info notes section
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                BIG ASS BUTTON
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form.create()(withRouter(CheckoutPage))