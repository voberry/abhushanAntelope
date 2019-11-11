import React, {useState} from 'react';
import {MDBModal, MDBInput, MDBBtn, MDBAnimation} from "mdbreact";
import {Link, withRouter} from 'react-router-dom';
import {Form, Button, Input, Icon} from 'antd'
import '../../../assets/css/authForm.css'

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

    const handleLoginFormSubmit = e => {
        e.preventDefault();
        validateFields([`email`, `password`], (err, values) => {
            if (!err) {
                props.modalProps.hideModal();
                props.history.push('/users');
            }
        });
    };

    const handleReset = () => {
        resetFields();
    };

    const showSignUpForm = () => {
        const container = document.getElementById('authContainer');
        container.classList.add("right-panel-active");
    };

    const showLoginForm = () => {
        const container = document.getElementById('authContainer');
        container.classList.remove("right-panel-active");
    };


    return (
        <div className={'mdbModal'}>
            <MDBModal isOpen={props.modalProps.isModalVisible} toggle={props.modalProps.hideModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div>
                            <div className="authContainer" id="authContainer">
                                <div className="form-authContainer sign-up-authContainer">
                                    <Form onSubmit={handleSubmit} onReset={handleReset}>
                                        <h4>Create Account</h4>
                                        <div className="social-authContainer">
                                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="social"><i
                                                className="fab fa-google-plus-g"></i></a>
                                            <a href="#" className="social"><i
                                                className="fab fa-linkedin-in"></i></a>
                                        </div>
                                        <span>or use your email for registration</span>
                                            <FormItem>

                                                {getFieldDecorator('name', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your name'
                                                    }],
                                                })(
                                                    <input placeholder="Enter your Name"
                                                           type="text"/>
                                                )}
                                            </FormItem>
                                            <FormItem>
                                                {getFieldDecorator('email', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your email'
                                                    }],
                                                })(
                                                    <input
                                                        placeholder="Email Address"
                                                        type="email"/>
                                                )}

                                            </FormItem>
                                            <FormItem>
                                                {getFieldDecorator('nationality', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please select your nationality'
                                                    }],
                                                })(
                                                    <input
                                                        onChange={(e) => handleSetIsPhoneNumberRequired(e)}
                                                        placeholder="Nationality"
                                                        type="text"/>
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
                                                        <input
                                                            placeholder="Phone Number"
                                                            type="text"/>
                                                    )}
                                                </FormItem>
                                            </div>
                                            <FormItem>
                                                {getFieldDecorator('countryCode', {
                                                    rules: [{
                                                        required: true,
                                                        message: 'Please input your country code'
                                                    }],
                                                })(
                                                    <input
                                                        placeholder="Country Code"
                                                        type="countryCode"/>
                                                )}
                                            </FormItem>
                                            <FormItem>
                                                <div className="text-center">
                                                    <Button type="primary" htmlType="submit" className={'larger-button'}>Sign
                                                        in
                                                    </Button>
                                                </div>
                                            </FormItem>
                                    </Form>
                                </div>
                                <div className="form-authContainer sign-in-authContainer">
                                    <Form onSubmit={handleLoginFormSubmit} onReset={handleReset}>
                                        <h1>Sign in</h1>
                                        <div className="social-authContainer">
                                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#" className="social"><i
                                                className="fab fa-google-plus-g"></i></a>
                                            <a href="#" className="social"><i
                                                className="fab fa-linkedin-in"></i></a>
                                        </div>
                                        <span>or use your account</span>
                                        <FormItem>
                                                    {getFieldDecorator('email', {
                                                        rules: [{
                                                            required: true,
                                                            message: 'Please input your email'
                                                        }],
                                                    })(
                                                        <input
                                                               placeholder="Email"
                                                               type="text"/>
                                                    )}
                                        </FormItem>
                                        <FormItem>
                                                    {getFieldDecorator('password', {
                                                        rules: [{
                                                            required: true,
                                                            message: 'Please input your Password'
                                                        }],
                                                    })(
                                                        <input
                                                               placeholder="Password"
                                                               type="password"/>
                                                    )}
                                        </FormItem>
                                        <FormItem>
                                            <div className="text-center">
                                                <Button type="primary" htmlType="submit"
                                                        className={'larger-button'}>Sign
                                                    in
                                                </Button>
                                            </div>
                                        </FormItem>
                                    </Form>
                                </div>
                                <div className="authOverlay-authContainer">
                                    <div className="authOverlay">
                                        <div className="authOverlay-panel authOverlay-left">
                                            <h1>Welcome Back!</h1>
                                            <p>To keep connected with us please login with your personal
                                                info</p>
                                            <button className="ghost" onClick={showLoginForm}>Sign In</button>
                                        </div>
                                        <div className="authOverlay-panel authOverlay-right">
                                            <h1>Hello, Friend!</h1>
                                            <p>Enter your personal details and start journey with us</p>
                                            <button className="ghost" onClick={showSignUpForm}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </MDBModal>
        </div>
    );
};

export default Form.create()(withRouter(LoginModal));