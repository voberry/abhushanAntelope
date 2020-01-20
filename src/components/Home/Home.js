import React, {useEffect, useState} from 'react';
import {Button, DatePicker, Form, InputNumber, Select, Tabs, Spin} from "antd";
import {withRouter, Link} from 'react-router-dom';
import moment from "moment";
import {MDBAnimation, MDBCol} from "mdbreact";

import locationOptions from '../../services/__mocks__/locations'
import Package from "./Package";
import {isEmpty} from "../../utils/commonUtil";
import PredefinedPackages from "./PredefinedPackages";
import LocationMap from "./LocationMap";
import LocationInfo from "./LocationInfo";
import AboutUsSection from "./AboutUsSection";
import LocationsContextProvider from "../Contexts/LocationsContext";

import animal from '../../assets/images/animal.png';
import temple from '../../assets/images/temple.png';
import party from '../../assets/images/party.png';

const {Option} = Select;
const {TabPane} = Tabs;

const FormItem = Form.Item;

const Home = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {form, fetchLocations, locations} = props;
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

    const handleLocationsSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            console.log(values)

        })
    };

    return (
        <div style={{
            height: '100%',
            marginTop : '-100px'
        }}>
            <div className="home-view intro-2">
                <div className="full-bg-img">
                    <div className="mask rgba-black-strong flex-center">
                        <div
                            className={` text-center home-transition-before home-flex-center ${isSubmitted && 'home-transition-after home-flex-end'}`}>
                            <div>
                                <h2 className={!isSubmitted ? `h1-responsive h1-lg primary-font` : `hide`}>Adventures you
                                    dream of.</h2>
                                <h2 className={!isSubmitted ? `h1-responsive h1-lg primary-font` : `hide`}>With us.</h2>
                                <br/>
                                <h6 className={!isSubmitted ? `text-center px-5 mx-5 white-text ` : `hide`}>With Antelope Nepal, you
                                    can create the holidays you
                                    dream of from the click of your mouse, on the go. And we do it according to your
                                    tastes. </h6>

                                <div className="container-fluid">
                                    <Form layout="inline" onSubmit={handleSubmit} className={'main-page-form'}>
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
                                                <FormItem label={'Check-In'}>
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
                                                <FormItem label={'Check-Out'}>
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
                                                        className={'mt-5 btn-sm antelope-green-bg w-100'}>
                                                    LETS GO!
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isSubmitted &&
            <MDBAnimation
                type="fadeIn"
                duration="1s"
                delay="1.5s">
                <div className={'container-fluid p-5'}>
                    <div className="px-5 mx-5">
                        <div>
                            <div className="d-flex justify-content-around align-items-center">
                                {!isEmpty(locations) && locations.map(item =>
                                    <div className="text-center">
                                        <div>
                                            <img src={item.icon === 'animal' ? animal : item.icon === 'party' ? party : temple} alt="" className='icon-images-lg'/>
                                            <h5 className="font-weight-bolder my-2 antelope-green">{item.title}</h5>
                                            <h6 className="font-weight-bolder my-2 antelope-green">{item.day} Days</h6>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-around flex-fill mx-5 my-5 ">
                        <div className="row w-100">
                            <div className="col-sm-12 col-md-3 p-0">
                                <Tabs defaultActiveKey="premade" className={'nav-justified nav-pills'}>
                                    <TabPane tab="Premade Packages" key="premade" className={'mr-0'}>
                                        <PredefinedPackages/>
                                    </TabPane>
                                    <TabPane tab="Customized" key="custom">
                                        <div className={'card z-depth-4'}>
                                            <div className="card-body">
                                                <Package/>
                                            </div>

                                        </div>
                                    </TabPane>
                                </Tabs>
                            </div>

                            <div className="col-sm-12 col-md-9" style={{
                                height: '400px'
                            }}>
                                <LocationMap
                                    location={locations}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'d-flex justify-content-center align-items-center'}>
                    <div>
                        <h2 className="font-weight-bolder mb-1 primary-font antelope-green">
                            Customize your trip
                        </h2>
                        <hr className={'text-center w-25 antelope-green-bg'}/>
                    </div>
                </div>

                <LocationsContextProvider>
                    <Form layout="inline" onSubmit={handleLocationsSubmit}>
                        {locations && locations.map((item, index) => <LocationInfo location={item} index={index}
                                                                                   form={form}/>)}

                        <div className={'d-flex justify-content-center align-items-center'}>
                            <div>
                                <button type="button" className="btn btn-flat btn-lg antelope-green-bg">
                                    Submit and Go !
                                </button>
                            </div>
                        </div>
                    </Form>
                </LocationsContextProvider>

            </MDBAnimation>
            }
            <div>
                <AboutUsSection/>
            </div>

        </div>
    )
};

export default Form.create()(withRouter(Home));