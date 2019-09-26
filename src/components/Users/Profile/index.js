import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {DatePicker, Select} from "antd";

const {Option} = Select;

const Index = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <form >
                        <div className={'card p-5 mb-2'}>
                            <h6 className={'h6-responsive my-2 pt-2 font-libre-franklin green-text text-center'}>Profile Form</h6>
                            <h4 className={'h4-responsive font-poppins text-center'}>Tell us about you!</h4>
                            <div className="grey-text">
                                <div className="row">
                                    <div className="col-md-6">
                                        <MDBInput
                                            label="Firstname"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <MDBInput
                                            label="Lastname"
                                            icon="lock"
                                            group
                                            type="text"
                                            validate
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <MDBInput
                                            label="Email Address"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <p>Date of Birth</p>
                                        <DatePicker
                                            className={'w-100'}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <MDBInput
                                            label="Phone Number"
                                            icon="phone"
                                            group
                                            type="number"
                                            validate
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <p>Gender</p>
                                        <Select className={'w-100'} showSearch
                                                placeholder={'Gender'}
                                        >
                                            <Option key={'male'} value={'male'}> Male  </Option>
                                            <Option key={'female'} value={'female'}> Female </Option>
                                            <Option key={'unknown'} value={'unknown'}> Do not Specify </Option>
                                        </Select>
                                    </div>

                                    <div className="col-md-6">
                                        <p>Interested In</p>
                                        <Select className={'w-100'} showSearch
                                                placeholder={'Interested In'}
                                        >
                                            <Option key={'trip'} value={'trip'}> Trip </Option>
                                            <Option key={'IDK'} value={'IDK'}> IDK </Option>
                                        </Select>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className={'card p-5 mb-2'}>
                            <h6 className={'h6-responsive my-2 pt-2 font-libre-franklin blue-text text-center'}>Social Media</h6>
                            <h4 className={'h4-responsive font-poppins text-center'}>Connect with us!</h4>
                            <div className="grey-text">
                                <div className="row">
                                    <div className="col-md-2">
                                        <i className={'fab fa-facebook-f blue-text fa-2x float-right mt-4'} />
                                    </div>

                                    <div className="col-md-5">
                                        <MDBInput
                                            label='Facebook'
                                            value={'https://www.facebook.com/'}
                                            group
                                            type="text"
                                            validate
                                            disabled
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>

                                    <div className="col-md-5">
                                        <MDBInput
                                            label='Facebook Account Id'
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <i className={'fab fa-twitter blue-text fa-2x float-right mt-4'} />
                                    </div>

                                    <div className="col-md-5">
                                        <MDBInput
                                            label='Twitter'
                                            value={'https://www.twitter.com/'}
                                            group
                                            type="text"
                                            validate
                                            disabled
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>

                                    <div className="col-md-5">
                                        <MDBInput
                                            label='Twitter Account Id'
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <i className={'fab fa-instagram instagram-colors white-text fa-2x float-right mt-4'} />
                                    </div>

                                    <div className="col-md-5">
                                        <MDBInput
                                            label='Instagram'
                                            value={'https://www.instagram.com/'}
                                            group
                                            type="text"
                                            validate
                                            disabled
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>

                                    <div className="col-md-5">
                                        <MDBInput
                                            label='Instagram Account Id'
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'card p-5 mb-2'}>
                            <h6 className={'h6-responsive my-2 pt-2 font-libre-franklin red-text text-center'}>Address</h6>
                            <h4 className={'h4-responsive font-poppins text-center'}>Where are you from?</h4>
                            <div className="grey-text">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Country</p>
                                        <Select className={'w-100'} showSearch
                                                placeholder={'Country'}
                                        >
                                            <Option key={'nepal'} value={'nepal'}> Nepal  </Option>
                                            <Option key={'america'} value={'america'}> Uh`Merica </Option>
                                            <Option key={'england'} value={'england'}> Brexit </Option>
                                        </Select>
                                    </div>

                                    <div className="col-md-6">
                                        <MDBInput
                                            label="State"
                                            icon="street-view"
                                            group
                                            type="text"
                                            validate
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <MDBInput
                                            label="Address"
                                            icon="search-location"
                                            group
                                            type="text"
                                            validate
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>


                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Index;