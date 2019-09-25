import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, InputNumber, Select, Tabs} from "antd";
import {withRouter} from 'react-router-dom';
import moment from "moment";
import {MDBAnimation} from "mdbreact";

import locationOptions from '../../services/__mocks__/locations'
import Package from "./Package";
import {isEmpty} from "../../utils/commonUtil";
import PredefinedPackages from "./PredefinedPackages";
import LocationMap from "./LocationMap";
import Locations from "./Locations";
import Carousels from "./Carousels";
import AboutUsSection from "./AboutUsSection";

const {Option} = Select;
const {TabPane} = Tabs;

const FormItem = Form.Item;

const Home = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {form, fetchLocations, locations, locationErrors, locationsLoading} = props;
    const {validateFields, getFieldDecorator} = form;


    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            // if (!err) {
            values.checkIn = values.checkIn
                ? moment(values.checkIn).format('MM-DD-YYYY')
                : null;
            values.checkOut = values.checkOut
                ? moment(values.checkOut).format('MM-DD-YYYY')
                : null;
            setIsSubmitted(true);
            fetchLocations();
            // }
        });
    };

    return (
        <div style={{
            height: '100%'
        }}>
            <div style={{
                backgroundImage: `url(https://miro.medium.com/max/3840/1*BchBq5jkzBFZKfH5SrQGTQ.jpeg)`
            }}>
            <div
                className={` text-center home-transition-before home-flex-center ${isSubmitted && 'home-transition-after home-flex-end'}`}>
                <div>
                    <h1 className={!isSubmitted ? `h1-responsive h1-lg` : `h3-responsive h3-lg`}>Adventures you dream of.</h1>
                    <h1 className={!isSubmitted ? `h1-responsive h1-lg` : `h3-responsive h3-lg`}>With us.</h1>
                    <br/>
                    <h6 className={'text-center px-5 mx-5'}>With Antelope Nepal, you can create the holidays you
                        dream of from the click of your mouse, on the go. And we do it according to your
                        tastes. </h6>

                    <div className="container">
                        <Form layout="inline" onSubmit={handleSubmit}>
                            <div className="mt-3 d-flex flex-fill">
                                <div className="px-3">
                                    <FormItem label={'From'}>
                                        {getFieldDecorator('from', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'This is required'
                                                }
                                            ]
                                        })(
                                            <Select style={{width: 120}} showSearch
                                                    placeholder={'Select Location'}
                                            >
                                                {locationOptions && locationOptions.locations.data.map(item =>
                                                    <Option key={item.code} value={item.title}>
                                                        {item.title}
                                                    </Option>
                                                )}
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                                <div className="px-3">
                                    <FormItem label={'To'}>
                                        {getFieldDecorator('to', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'This is required'
                                                }
                                            ]
                                        })(
                                            <Select style={{width: 120}} showSearch
                                                    placeholder={'Select Location'}
                                            >
                                                {locationOptions && locationOptions.locations.data.map(item =>
                                                    <Option key={item.code} value={item.title}>
                                                        {item.title}
                                                    </Option>
                                                )}
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>

                                <div className="px-3">
                                    <FormItem label={'Check-In'} >
                                        {getFieldDecorator('checkIn', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'This is required'
                                                }
                                            ]
                                        })(
                                            <DatePicker
                                                className={'w-100'}
                                            />
                                        )}
                                    </FormItem>
                                </div>

                                <div className="px-3">
                                    <FormItem label={'Check-Out'} >
                                        {getFieldDecorator('checkOut', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'This is required'
                                                }
                                            ]
                                        })(
                                            <DatePicker
                                                className={'w-100'}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="px-3">
                                    <FormItem label={'Travellers'}>
                                        {getFieldDecorator('travellers', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'This is required'
                                                }
                                            ]
                                        })(
                                            <InputNumber
                                                className={'form-control w-100'}
                                                min={0}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="px-3">
                                    <FormItem label={'Class'}>
                                        {getFieldDecorator('class', {
                                            initialValue: 'moderate',
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'This is required'
                                                }
                                            ]
                                        })(
                                            <Select style={{width: 120}} showSearch>
                                                <Option value="economy">Economy</Option>
                                                <Option value="moderate">Moderate</Option>
                                                <Option value="premium">
                                                    Premium
                                                </Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </div>
                                <div className="px-3">
                                    <Button htmlType="submit"
                                            className={'mt-5 btn-success antelope-green-bg  w-100'}>
                                        LETS GO!
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

            {isSubmitted &&
            <MDBAnimation
                type="fadeIn"
                duration="1s"
                delay="1.5s">
                <div className={'container-fluid mt-3 px-5"'}>
                    <div className="d-flex justify-content-around flex-fill px-5 mx-5">

                        {!isEmpty(locations) && locations.map(item =>
                            <div className="text-center p-2">
                                <i className={`fas fa-${item.icon} fa-3x `}/>
                                <h5 className="font-weight-bold my-4 ">{item.title}</h5>
                                <h6 className="font-weight-bold my-4 ">{item.day} Days</h6>
                            </div>
                        )}
                    </div>

                    <div className="d-flex justify-content-around flex-fill px-5 mx-5 my-5">
                        <div className="row w-100">
                            <div className="col-md-3">
                                <Tabs defaultActiveKey="premade" className={'nav-justified nav-pills'}>
                                    <TabPane tab="Premade Packages" key="premade">
                                        <PredefinedPackages/>
                                    </TabPane>
                                    <TabPane tab="Customized" key="custom">
                                        <Package/>
                                    </TabPane>
                                </Tabs>
                            </div>

                            <div className="col-md-9">
                                <LocationMap
                                    location={locations}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={'container-fluid mt-3 px-5"'} style={{
                    background: 'aliceblue'
                }}>
                    <div className="d-flex justify-content-around flex-fill px-5 mx-5">

                        <div className="row w-100">
                            <div className="col-md-9">
                                <Locations/>

                                <div style={{
                                    color: 'white'
                                }}>
                                    <Tabs defaultActiveKey="premade">
                                        <TabPane tab="Hotels" key="hotels" >
                                            <Carousels/>
                                        </TabPane>
                                        <TabPane tab="Vehicle Rentals" key="vehicles" >
                                        </TabPane>
                                        <TabPane tab="Restaurants" key="restaurants" >
                                        </TabPane>
                                    </Tabs>
                                </div>


                            </div>

                            <div className="col-md-3">
                                <div className="card mt-5">
                                    <div className="card-body">

                                        <h4 className="card-title"><a>Kathmandu Packages</a></h4>
                                        <p className="card-text">Some quick example text to build on the card
                                            title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </MDBAnimation>
            }
            </div>

            <div>
                <AboutUsSection/>
            </div>

        </div>
    )
};

export default Form.create()(withRouter(Home));