import React, {useState} from 'react';
import {MDBModal, MDBInput, MDBBtn, MDBAnimation} from "mdbreact";
import {Link, withRouter} from 'react-router-dom';
import {Form, Button, Input, Icon} from 'antd'

const FormItem = Form.Item;

const LoginModal = (props) => {
    const {form} = props;
    const {getFieldDecorator, validateFields, resetFields, setFieldsValue, getFieldValue} = form;
    const [isLoginModal, setIsLoginModal] = useState(true);

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
            <MDBModal isOpen={props.modalProps.isModalVisible} toggle={props.modalProps.hideModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {
                            isLoginModal ?
                                <div>
                                    <MDBAnimation type="fadeInLeft">
                                        <div className="card">
                                            <div className="card-title py-3 px-5" style={{
                                                borderBottom: '1px solid rgba(0, 0, 0, .1)'
                                            }}>
                                                <div className="text-muted text-center mt-2 mb-3"><small>Sign in
                                                    with</small></div>
                                                <div className="btn-wrapper text-center">
                                                    <a href="#" className="btn btn-neutral btn-icon">
                                                        <span className="btn-inner-icon">
                                                            <i className={'fab fa-facebook-f blue-text pr-1'}/>
                                                        </span>
                                                        <span className="btn-inner--text">Facebook</span>
                                                    </a>
                                                    <a href="#" className="btn btn-neutral btn-icon">
                                                        <span className="btn-inner--icon">
                                                            <i className={'fab fa-instagram instagram-colors white-text mr-1'}/>
                                                        </span>
                                                        <span className="btn-inner--text">Instagram</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="card-body py-5 px-lg-5">
                                                <div className="text-center text-muted mb-2">
                                                    <small>Or sign in with credentials</small>
                                                </div>
                                                <Form onSubmit={handleSubmit} onReset={handleReset}>
                                                    <div className="modal-body login-form">
                                                        <FormItem>
                                                            <div className="form-group mb-3">
                                                                <div className="input-group input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-envelope light-text"/>
                                                                </span>
                                                                    </div>
                                                                    {getFieldDecorator('email', {
                                                                        rules: [{
                                                                            required: true,
                                                                            message: 'Please input your email'
                                                                        }],
                                                                    })(
                                                                        <input className="form-control"
                                                                               placeholder="Email"
                                                                               type="email"/>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormItem>
                                                        <FormItem>
                                                            <div className="form-group">
                                                                <div className="input-group input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-unlock-alt"></i>
                                                                </span>
                                                                    </div>
                                                                    {getFieldDecorator('password', {
                                                                        rules: [{
                                                                            required: true,
                                                                            message: 'Please input your Password'
                                                                        }],
                                                                    })(
                                                                        <input className="form-control"
                                                                               placeholder="Password"
                                                                               type="password"/>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormItem>
                                                        <FormItem>
                                                            <div className="text-center">
                                                                <Button type="primary" htmlType="submit"
                                                                        className="btn antelope-green-bg white-text my-4 btn-sm">Sign
                                                                    in
                                                                </Button>
                                                            </div>
                                                        </FormItem>
                                                    </div>
                                                </Form>

                                                <div className="row mt-3">
                                                    <div className="col-6">
                                                        <a href="#" className="text-primary"><small>Forgot
                                                            password?</small></a>
                                                    </div>
                                                    <div className="col-6 text-right"
                                                         onClick={() => setIsLoginModal(false)}>
                                                        <a href="#" className="text-primary"><small>Sign Up</small></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBAnimation>
                                </div>
                                :
                                <MDBAnimation type='fadeInRight'>
                                    <div className="card">
                                        <div className="card-title pt-3 pb-2 px-5" style={{
                                            borderBottom: '1px solid rgba(0, 0, 0, .1)'
                                        }}>
                                            <div className="text-muted text-center mt-2 mb-3"><small>Sign Up
                                                with</small></div>
                                            <div className="btn-wrapper text-center">
                                                <a href="#" className="btn btn-neutral btn-icon">
                                                        <span className="btn-inner-icon">
                                                            <i className={'fab fa-facebook-f blue-text pr-1'}/>
                                                        </span>
                                                    <span className="btn-inner--text">Facebook</span>
                                                </a>
                                                <a href="#" className="btn btn-neutral btn-icon">
                                                        <span className="btn-inner--icon">
                                                            <i className={'fab fa-instagram instagram-colors white-text mr-1'}/>
                                                        </span>
                                                    <span className="btn-inner--text">Instagram</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body py-5 px-lg-5">
                                            <div className="text-center text-muted mb-2">
                                                <small>Or sign up with credentials</small>
                                            </div>
                                            <Form onSubmit={handleSubmit} onReset={handleReset}>
                                                    <FormItem>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-alternative">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-envelope light-text"/>
                                                                </span>
                                                                </div>
                                                                {getFieldDecorator('name', {
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please input your name'
                                                                    }],
                                                                })(
                                                                    <input className="form-control" placeholder="Enter your Name"
                                                                           type="text"/>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </FormItem>
                                                    <FormItem>
                                                        <div className="form-group">
                                                            <div className="input-group input-group-alternative">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-unlock-alt"></i>
                                                                </span>
                                                                </div>
                                                                {getFieldDecorator('email', {
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please input your email'
                                                                    }],
                                                                })(
                                                                    <input className="form-control"
                                                                           placeholder="Email Address"
                                                                           type="email"/>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </FormItem>
                                                    <FormItem>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-alternative">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-envelope light-text"/>
                                                                </span>
                                                                </div>
                                                                {getFieldDecorator('nationality', {
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please select your nationality'
                                                                    }],
                                                                })(
                                                                    <input className="form-control"
                                                                           onChange={(e) => handleSetIsPhoneNumberRequired(e)}
                                                                           placeholder="Nationality"
                                                                           type="text"/>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </FormItem>
                                                    <div hidden={!isPhoneNumberRequired}>
                                                        <FormItem>
                                                            <div className="form-group mb-3">
                                                                <div className="input-group input-group-alternative">
                                                                    <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-envelope light-text"/>
                                                                </span>
                                                                    </div>
                                                                    {getFieldDecorator('phoneNumber', {
                                                                        rules: [{
                                                                            required: isPhoneNumberRequired,
                                                                            message: 'Please input your phoneNumber'
                                                                        }],
                                                                    })(
                                                                        <input className="form-control"
                                                                               placeholder="Phone Number"
                                                                               type="text"/>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormItem>
                                                    </div>
                                                    <FormItem>
                                                        <div className="form-group mb-3">
                                                            <div className="input-group input-group-alternative">
                                                                <div className="input-group-prepend">
                                                                <span className="input-group-text">
                                                                    <i className="fas fa-envelope light-text"/>
                                                                </span>
                                                                </div>
                                                                {getFieldDecorator('countryCode', {
                                                                    rules: [{
                                                                        required: true,
                                                                        message: 'Please input your country code'
                                                                    }],
                                                                })(
                                                                    <input className="form-control"
                                                                           placeholder="Country Code"
                                                                           type="countryCode"/>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </FormItem>
                                                    <FormItem>
                                                        <div className="text-center">
                                                            <Button type="primary" htmlType="submit"
                                                                    className="btn antelope-green-bg white-text my-4 btn-sm">Sign
                                                                in
                                                            </Button>
                                                        </div>
                                                    </FormItem>
                                            </Form>

                                            <div className="row mt-3">
                                                <div className="col-12 text-right"
                                                     onClick={() => setIsLoginModal(true)}>
                                                    <span
                                                        className={'text-light small'}>Already have an account? </span>
                                                    <a className="text-primary"><small>SIGN IN</small></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </MDBAnimation>
                            }
                            </div>
                            </div>

                            </MDBModal>
                            </div>
                            );
                            };

                            export default Form.create()(withRouter(LoginModal));