import React from 'react';
import {Link, withRouter} from 'react-router-dom'

const Blog = () => {
    return (
        <div className={'container p-5'}>
            <section>
                <h2 className="font-weight-bolder mb-5 antelope-green text-center primary-font">Our Blogs</h2>
                <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate
                    velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa
                    qui officia deserunt mollit anim id est laborum.</p>

                <div className="row">

                    <div className="col-lg-5">
                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                            <Link to={'/blogs/title'}>
                                <img className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
                                <a>
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <a href="#!" className="green-text">
                            <h6 className="font-weight-bolder mb-3 small"><i className="fas fa-suitcase pr-2"></i>Category</h6>
                        </a>
                        <h3 className="font-weight-bolder mb-3 primary-font">
                            <Link to={'/blogs/title'}>
                                <h5 className={'font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase '}>Title of the blog</h5>
                            </Link>
                        </h3>                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque
                        nihil impedit quo minus id
                        quod maxime
                        placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut
                        officiis debitis.</p>
                        <p>by <a><strong>Carine Fox</strong></a>, 19/08/2018</p>
                        <a className="btn antelope-green-bg btn-md">Read more</a>
                    </div>
                </div>
                <hr className="my-5"/>
                <div className="row">
                    <div className="col-lg-7">

                        <a href="#!" className="pink-text">
                            <h6 className="font-weight-bolder mb-3 small"><i className="fas fa-suitcase pr-2"></i>Category</h6>
                        </a>
                        <h3 className="font-weight-bolder mb-3 primary-font">
                            <Link to={'/blogs/title'}>
                                <h5 className={'font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase '}>Title of the blog</h5>
                            </Link>
                        </h3>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                            non
                            provident.</p>
                        <p>by <a><strong>Carine Fox</strong></a>, 14/08/2018</p>
                        <a className="btn antelope-green-bg btn-md">Read more</a>

                    </div>

                    <div className="col-lg-5">

                        <div className="view overlay rounded z-depth-2">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                                 alt="Sample image"/>
                            <a>
                                <div className="mask rgba-white-slight"/>
                            </a>
                        </div>

                    </div>

                </div>

                <hr className="my-5"/>

                <div className="row">

                    <div className="col-lg-5">

                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                                 alt="Sample image"/>
                            <a>
                                <div className="mask rgba-white-slight"/>
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <a href="#!" className="indigo-text">
                            <h6 className="font-weight-bolder mb-3 small"><i className="fas fa-suitcase pr-2"></i>Category</h6>
                        </a>
                        <h3 className="font-weight-bolder mb-3 primary-font">
                            <Link to={'/blogs/title'}>
                                <h5 className={'font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase '}>Title of the blog</h5>
                            </Link>
                        </h3>                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia
                        consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                        sit amet.</p>
                        <p>by <a><strong>Carine Fox</strong></a>, 11/08/2018</p>
                        <a className="btn antelope-green-bg btn-md">Read more</a>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default withRouter(Blog);