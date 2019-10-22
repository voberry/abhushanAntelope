import React, {useState} from 'react';
import {MDBModal, MDBInput} from "mdbreact";
import {Link, withRouter} from 'react-router-dom';
import {Form, Button, Input, Icon} from 'antd'

const FormItem = Form.Item;

const SignUpModal = (props) => {
    const {form} = props;
    const {getFieldDecorator, validateFields, resetFields, setFieldsValue, getFieldValue} = form;
    const [isPhoneNumberRequired, setIsPhoneNumberRequired] = useState(false);

    const handleSetIsPhoneNumberRequired = (event) => {
        setFieldsValue({
            'nationality': event.target.value,
        });

        let nationality = getFieldValue('nationality');
        if (nationality === 'Nepali') {
            setIsPhoneNumberRequired(true)
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                props.modalProps.hideModal();
                props.history.push('/users');
            }
        });
    };

    const handleReset = () => {
        resetFields();
    };

    return (
        <div className={'mdbModal'}>
            <MDBModal isOpen={props.modalProps.isModalVisible}>
                <div className="modal-dialog form-dark" role="document">
                    <div className="modal-content card card-image" style={{
                        backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg')`
                    }}>
                        <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                            <div className="modal-header text-center pb-4">
                                <h3 className="modal-title w-100 white-text font-weight-bold" id="myModalLabel">
                                    <strong>SIGN</strong> <a
                                    className="green-text font-weight-bold"><strong> In</strong></a></h3>
                                <button type="button" className="close white-text" data-dismiss="modal"
                                        aria-label="Close" onClick={props.modalProps.hideModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <Form onSubmit={handleSubmit} onReset={handleReset}>
                                <div className="modal-body">
                                    <FormItem>
                                        {getFieldDecorator('name', {
                                            rules: [{required: true, message: 'Please input your name'}],
                                        })(
                                            <Input
                                                size="large"
                                                prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                                placeholder="Name"
                                            />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('email', {
                                            rules: [{required: true, message: 'Please input your email'}],
                                        })(
                                            <Input
                                                size="large"
                                                prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                                type="email"
                                                placeholder="email"
                                            />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('nationality', {
                                            rules: [{required: true, message: 'Please select your nationality'}],
                                        })(
                                            <Input
                                                size="large"
                                                prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                                placeholder="Nationality"
                                                onChange={(e) => handleSetIsPhoneNumberRequired(e)}
                                            />
                                        )}
                                    </FormItem>
                                    <div hidden={!isPhoneNumberRequired}>
                                        <FormItem>
                                            {getFieldDecorator('phoneNumber', {
                                                rules: [{
                                                    required: isPhoneNumberRequired,
                                                    message: 'Please input your phoneNumber'
                                                }],
                                            })(
                                                <Input
                                                    size="large"
                                                    prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                                    placeholder="phone Number"
                                                />
                                            )}
                                        </FormItem>
                                    </div>
                                    <FormItem>
                                        {getFieldDecorator('Country Code', {
                                            rules: [{required: true, message: 'Please input your country code'}],
                                        })(
                                            <Input
                                                size="large"
                                                prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                                placeholder="Country Code"
                                            />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" htmlType="submit"
                                                className="login-form-button text-center w-100">
                                            Sign Up
                                        </Button>
                                    </FormItem>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </MDBModal>
        </div>
    );
};

export default Form.create()(withRouter(SignUpModal));