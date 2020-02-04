import React from "react";
import {Button, Form, Input} from "antd";
import {withRouter , Link} from "react-router-dom";

const FooterPage = () => {
    return (
        <footer className="page-footer font-small elegant-color-dark pt-4">

            <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-sm-12 col-md-4 mx-auto text-center">

                        <h5 className="font-weight-bolder text-uppercase mt-3 mb-4 white-text">Newsletter</h5>
                        <Form onSubmit={()=> console.log('submission form')}>
                            <Form.Item>
                                <Input placeholder={'Email'} className={'form-control'}/>
                            </Form.Item>

                            <Form.Item>
                                <button className={'btn antelope-green-bg-light white-text white-text'} type="submit">
                                    Subscribe
                                </button>
                            </Form.Item>
                        </Form>



                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                        <div className="col-sm-12 col-md-2 mx-auto">

                            <h5 className="font-weight-bolder text-uppercase mt-3 mb-4  white-text">Company</h5>

                            <ul className="list-unstyled">
                                <li className={'footer-lists'}>
                                    <Link to='/contact-us' >Contact</Link>
                                </li>
                                <li className={'footer-lists'}>
                                    <Link to='/about-us' >About us</Link>
                                </li>
                                <li className={'footer-lists'}>
                                    <Link to='#' >How To?</Link>
                                </li>
                                <li className={'footer-lists'}>
                                    <Link to='#' >Team</Link>
                                </li>
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                            <div className="col-sm-12 col-md-2 mx-auto">

                                <h5 className="font-weight-bolder text-uppercase mt-3 mb-4  white-text">Support</h5>

                                <ul className="list-unstyled">
                                    <li className={'footer-lists'}>
                                        <Link to='#' >Our Partners</Link>
                                    </li>
                                    <li className={'footer-lists'}>
                                        <Link to='#' >Privacy Policy</Link>
                                    </li>
                                    <li className={'footer-lists'}>
                                        <Link to='#' >FAQ</Link>
                                    </li>
                                    <li className={'footer-lists'}>
                                        <Link to='#' >Terms of Use</Link>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                                <div className="col-sm-12 col-md-2 mx-auto">

                                    <h5 className="font-weight-bolder text-uppercase mt-3 mb-4  white-text">More</h5>

                                    <ul className="list-unstyled">
                                        <li className={'footer-lists'}>
                                            <Link to='#' >Destinations</Link>
                                        </li>
                                        <li className={'footer-lists'}>
                                            <Link to='/our-serives/treks' >Trips</Link>
                                        </li>
                                        <li className={'footer-lists'}>
                                            <Link to='#' >Adventure Sports</Link>
                                        </li>
                                        <li className={'footer-lists'}>
                                            <Link to='#' >Others</Link>
                                        </li>
                                    </ul>

                                </div>

                </div>

            </div>

            <hr />

                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1  white-text">Where do you want to go next?</h5>
                    </li>
                    <li className="list-inline-item">
                        <Link to='/our-services/places'  className="btn antelope-green-bg btn-rounded">Start Planning!</Link>
                    </li>
                </ul>

                <hr />

                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <Link to='#' className="mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='#' className="mx-1">
                                <i className="fab fa-twitter"> </i>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to='#' className="mx-1">
                                <i className="fab fa-instagram" />
                            </Link>
                        </li>
                    </ul>
                    <div className="footer-copyright text-center py-3">© 2019 Copyright. All rights reserved:
                        <Link to ='#'> Voberry Technologies Pvt. Ltd.</Link>
                    </div>
        </footer>

    );
}

export default withRouter(FooterPage);