import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-bootstrap';
import { MDBContainer, MDBBtn } from 'mdbreact';
import { AuthConsumer, withContext } from './../Layout/Header/AuthContext';
import { isEmpty } from '../../utils/commonUtil';

class LoginPage extends Component {

    state = {
        errorMessage: '',
    };

    render() {

        const errorMessage = this.state.errorMessage;
        return (
            <AuthConsumer>
                {({ loginError }) => (
                    <MDBContainer className='mt-5 pt-5 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Login Page</h1>

                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    let errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    return errors;
                                }}
                                onSubmit={values => {
                                    this.props.login(values).then((response) => {
                                            this.props.history.push('/dashboard');
                                    })
                                        .catch(error => {
                                            this.setState({ errorMessage: error.response.data.data });
                                        });

                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        {!isEmpty(errorMessage) &&
                                        <Alert variant="danger">
                                            {errorMessage &&
                                            <div className="text-center">
                                                <h5>Login Failed. Please Try Again</h5>
                                            </div>}
                                        </Alert>}
                                        <Field type="text" name="email" />
                                        <ErrorMessage name="email" component="div" />
                                        <Field type="password" name="password" />
                                        <ErrorMessage name="password" component="div" />
                                        <MDBBtn color="indigo" type="submit" >Login</MDBBtn>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </MDBContainer>
                )}
            </AuthConsumer>

        );
    }
}

export default withContext(LoginPage);
