import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import {DatePicker, Select} from "antd";

const {Option} = Select;

const Index = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <form className={'card p-5'}>
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
                                        icon="lock"
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

                        <br/>
                        <h6 className={'h6-responsive my-2 pt-2 font-libre-franklin blue-text text-center'}>Social Media</h6>
                        <h4 className={'h4-responsive font-poppins text-center'}>Connect with us!</h4>

                        <div className="grey-text">
                            <div className="row">
                                <div className="col-md-2">
                                    <button className={'btn blue btn-sm pull-right'}>
                                        <i className={'fab fa-facebook-f white-text fa-2x'} />
                                    </button>
                                </div>

                                <div className="col-md-4">
                                    <input type={'text'} disabled placeholder={'https://www.facebook.com/'} className={'form-control mt-1 '}/>
                                </div>

                                <div className="col-md-4">
                                    <input type={'text'} placeholder={'Your profile info'} className={'form-control mt-1 '}/>
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