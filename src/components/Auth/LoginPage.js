import React, {Component} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Alert} from 'react-bootstrap';
import {MDBContainer, MDBBtn} from 'mdbreact';
import {AuthConsumer, withContext} from './../Layout/Header/AuthContext';
import {isEmpty} from '../../utils/commonUtil';
import LoginBackground from '../../assets/images/loginBG.jpg'

class LoginPage extends Component {

    state = {
        errorMessage: '',
    };

    render() {

        const errorMessage = this.state.errorMessage;
        return (
            <div style={{
                background: `url(${LoginBackground})`,
                backgroundSize: 'cover',
                height: '100vh',
                marginTop: '-90px'
            }}>
                <AuthConsumer>
                    {({loginError}) => (
                        <div style={{
                            height: 'inherit'
                        }} className={'mask rgba-black-strong flex-center'}>
                            <MDBContainer className='mt-5 pt-5 d-flex justify-content-center align-items-center'>
                                <div>
                                    <h1 className='h1-responsive white-text'>Login Page</h1>

                                    <Formik
                                        initialValues={{text: '', password: ''}}
                                        onSubmit={values => {
                                            this.props.history.push('/users/')
                                        }}
                                    >
                                        {({isSubmitting}) => (
                                            <Form>
                                                {!isEmpty(errorMessage) &&
                                                <Alert variant="danger">
                                                    {errorMessage &&
                                                    <div className="text-center">
                                                        <h5>Login Failed. Please Try Again</h5>
                                                    </div>}
                                                </Alert>}
                                                <Field type="text" name="text"/>
                                                <ErrorMessage name="text" component="div"/>
                                                <Field type="password" name="password"/>
                                                <ErrorMessage name="password" component="div"/>
                                                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </MDBContainer>
                        </div>
                    )}
                </AuthConsumer>

            </div>
        );
    }
}

export default withContext(LoginPage);
