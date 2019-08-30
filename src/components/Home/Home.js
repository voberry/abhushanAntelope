import React, {useState} from 'react';
import {MDBView, MDBMask} from "mdbreact";
import {withRouter} from 'react-router-dom'
import {Form, Input, DatePicker, InputNumber, Button} from 'antd';
import moment from 'moment'

const FormItem = Form.Item;

const Home = (props) => {
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
        <React.Fragment>
            <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
                <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                    <h1 className={'h1-lg'}>Adventures you dream of.</h1>
                    <h1 className={'h1-lg'}>With us.</h1>
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
                                    <Button  htmlType="submit" className={'mt-5 btn-success antelope-green-bg white-text w-100'}>
                                        Lets go
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </MDBMask>

            </MDBView>
        </React.Fragment>
    )
}

export default Form.create()(withRouter(Home));
