import React from 'react';
import {Form} from 'antd';
import {withRouter, Link} from 'react-router-dom'

const CheckoutPage = () => {
    return (
        <div>
            <div className={'container-fluid p-5 w-100'}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h1>fixed div</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                Form items
                            </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-body">
                                guide checkbox
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                guest additional info that gets added.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                               additional info notes section
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                BIG ASS BUTTON
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form.create()(withRouter(CheckoutPage))