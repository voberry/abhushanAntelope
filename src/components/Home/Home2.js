import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, InputNumber} from "antd";
import {withRouter} from 'react-router-dom';
import moment from "moment";
import {MDBAnimation} from "mdbreact";

const FormItem = Form.Item;

const Home2 = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {validateFields, getFieldDecorator} = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                values.checkIn = values.checkIn
                    ? moment(values.checkIn).format('MM-DD-YYYY')
                    : null;
                values.checkOut = values.checkOut
                    ? moment(values.checkOut).format('MM-DD-YYYY')
                    : null;
                setIsSubmitted(true);
                console.log(values);
            }
        });
    };

    return (
        <div style={{
            height: '100%'
        }}>
            <div
                className={`flex-center flex-column text-white text-center home-transition-before ${isSubmitted && 'home-transition-after'}`}>
                    <h1 className={!isSubmitted ? `h1-lg` : `h3-lg`}>Adventures you dream of.</h1>
                    <h1 className={!isSubmitted ? `h1-lg` : `h3-lg`}>With us.</h1>
                    <br/>
                    <h6 className={'text-center px-5 mx-5'}>With Antelope Nepal, you can create the holidays you
                        dream of from the click of your mouse, on the go. And we do it according to your
                        tastes. </h6>

                    <div className="container px-5 mx-5">
                        <Form layout="inline" onSubmit={handleSubmit}>
                            <div className="row mt-3">
                                <div className="col-md-2 px-3">
                                    <FormItem label={'Where?'}>
                                        {getFieldDecorator('where', {})(
                                            <Input
                                                type="text"
                                                placeholder={'Eg . Kathmandu'}
                                                className={'form-control w-100'}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-md-2 px-3">
                                    <FormItem label={'Check-In'} className={'white-text'}>
                                        {getFieldDecorator('checkIn', {})(
                                            <DatePicker
                                                className={'w-100'}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-md-2 px-3">
                                    <FormItem label={'Check-Out'} className={'white-text'}>
                                        {getFieldDecorator('checkOut', {})(
                                            <DatePicker
                                                className={'w-100'}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-md-2 px-3">
                                    <FormItem label={'Adults'}>
                                        {getFieldDecorator('adults', {})(
                                            <InputNumber
                                                className={'form-control w-100'}
                                                min={0}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-md-2 px-3">
                                    <FormItem label={'Price'}>
                                        {getFieldDecorator('price', {})(
                                            <InputNumber
                                                className={'form-control w-100'}
                                                min={0}
                                            />
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-md-2 px-3">
                                    <Button htmlType="submit"
                                            className={'mt-5 btn-success antelope-green-bg white-text w-100'}>
                                        Lets go
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            < MDBAnimation
                type="fadeIn"
                duration="1s"
                delay="1.5s">
                {isSubmitted && <div>
                    <section className="text-center container-fluid">
                        <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.1</h2>

                        <p className="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas
                            nostrum quisquam
                            eum porro a pariatur veniam.</p>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                                <div className="card testimonial-card">
                                    <div className="card-up info-color"/>
                                    <div className="avatar mx-auto white">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                             className="rounded-circle img-fluid"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="font-weight-bold mb-4">John Doe</h4>
                                        <hr/>
                                        <p className="dark-grey-text mt-4"><i
                                            className="fas fa-quote-left pr-2"/>Lorem ipsum dolor sit amet
                                            eos
                                            adipisci, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-md-0 mb-4">
                                <div className="card testimonial-card">
                                    <div className="card-up blue-gradient">
                                    </div>
                                    <div className="avatar mx-auto white">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                             className="rounded-circle img-fluid"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                                        <hr/>
                                        <p className="dark-grey-text mt-4"><i
                                            className="fas fa-quote-left pr-2"/>Neque cupiditate assumenda in
                                            maiores repudiandae mollitia architecto.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card testimonial-card">
                                    <div className="card-up indigo"/>
                                    <div className="avatar mx-auto white">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                             className="rounded-circle img-fluid"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                                        <hr/>
                                        <p className="dark-grey-text mt-4"><i className="fas fa-quote-left pr-2"/>Delectus
                                            impedit saepe officiis
                                            ab aliquam repellat rem unde ducimus.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>
                }

            </MDBAnimation>
        </div>
    )
        ;
};

export default Form.create()(withRouter(Home2));