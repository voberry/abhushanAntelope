import React from "react";
import {Form, Input} from "antd";

const FooterPage = () => {
    return (
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-5">

            <div className="container text-center text-md-left">

                <div className="row">

                    <div className="col-md-4 mx-auto text-center">

                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Newsletter</h5>
                        <Form onSubmit={()=> console.log('submission form')}>
                            <Form.Item>
                                <Input placeholder={'Email'} className={'form-control'}/>
                            </Form.Item>

                            <Form.Item>
                                <button className={'btn btn-success'} htmlType="submit">
                                    Subscribe
                                </button>
                            </Form.Item>
                        </Form>



                    </div>

                    <hr className="clearfix w-100 d-md-none" />

                        <div className="col-md-2 mx-auto">

                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Company</h5>

                            <ul className="list-unstyled">
                                <li className={'footer-lists'}>
                                    <a href="#!">Contact</a>
                                </li>
                                <li className={'footer-lists'}>
                                    <a href="#!">About us</a>
                                </li>
                                <li className={'footer-lists'}>
                                    <a href="#!">How To?</a>
                                </li>
                                <li className={'footer-lists'}>
                                    <a href="#!">Team</a>
                                </li>
                            </ul>

                        </div>

                        <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-2 mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Support</h5>

                                <ul className="list-unstyled">
                                    <li className={'footer-lists'}>
                                        <a href="#!">Our Partners</a>
                                    </li>
                                    <li className={'footer-lists'}>
                                        <a href="#!">Privacy Policy</a>
                                    </li>
                                    <li className={'footer-lists'}>
                                        <a href="#!">FAQ</a>
                                    </li>
                                    <li className={'footer-lists'}>
                                        <a href="#!">Terms of Use</a>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                                <div className="col-md-2 mx-auto">

                                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">More</h5>

                                    <ul className="list-unstyled">
                                        <li className={'footer-lists'}>
                                            <a href="#!">Destinations</a>
                                        </li>
                                        <li className={'footer-lists'}>
                                            <a href="#!">Trips</a>
                                        </li>
                                        <li className={'footer-lists'}>
                                            <a href="#!">Adventure Sports</a>
                                        </li>
                                        <li className={'footer-lists'}>
                                            <a href="#!">Others</a>
                                        </li>
                                    </ul>

                                </div>

                </div>

            </div>

            <hr />

                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Where do you want to go next?</h5>
                    </li>
                    <li className="list-inline-item">
                        <a href="#!" className="btn btn-danger btn-rounded">Start Planning!</a>
                    </li>
                </ul>

                <hr />

                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                                <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                                <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                                <i className="fab fa-google-plus-g"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                                <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-dribbble mx-1">
                                <i className="fab fa-dribbble"> </i>
                            </a>
                        </li>
                    </ul>
                    <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> Voberry Technologies</a>
                    </div>
        </footer>

    );
}

export default FooterPage;