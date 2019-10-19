import React from 'react';
import {MDBModal, MDBInput} from "mdbreact";

const LoginModal = (props) => {
    return (
        <div className={'mdbModal'}>
            <MDBModal isOpen={props.modalProps.isModalVisible} >
                <div className="modal-dialog form-dark" role="document">
                    <div className="modal-content card card-image" style={{
                        backgroundImage: `url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg')`
                    }}>
                        <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                            <div className="modal-header text-center pb-4">
                                <h3 className="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a
                                    className="green-text font-weight-bold"><strong> In</strong></a></h3>
                                <button type="button" className="close white-text" data-dismiss="modal" aria-label="Close" onClick={props.modalProps.hideModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="md-form mb-5">
                                    <MDBInput
                                        label="Type your email"
                                        icon="envelope"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                </div>

                                <div className="md-form pb-3">
                                    <MDBInput
                                        label="Type your Password"
                                        icon="envelope"
                                        group
                                        type="password"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                        <div className="form-group mt-4">
                                            <input className="form-check-input" type="checkbox" id="checkbox624" />
                                                <label for="checkbox624" className="white-text form-check-label">Accept the<a href="#" className="green-text font-weight-bold">
                                                    Terms and Conditions</a></label>
                                        </div>
                                </div>

                                <div className="row d-flex align-items-center mb-4">

                                    <div className="text-center mb-3 col-md-12">
                                        <button type="button" className="btn btn-success btn-block btn-rounded z-depth-1">Sign In</button>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-md-12">
                                        <p className="font-small white-text d-flex justify-content-end">Have an account? <a href="#" className="green-text ml-1 font-weight-bold">
                                            Log in</a></p>
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

export default LoginModal;