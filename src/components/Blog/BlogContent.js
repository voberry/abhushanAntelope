import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import StickyBox from "react-sticky-box";
import Wallpaper from "../../assets/images/wallpaper.jpg";
import Image from '../../assets/images/carefree.png'

import {AuthContext} from '../../components/Layout/Header/AuthContext'

const BlogContent = props => {
    const authData = useContext(AuthContext);
    const {isAuthenticated} = authData;

    return (
        <div className={'container-fluid p-5'}>
            <section>
                <div className="row">
                    <div className="col-md-10">
                        <div className="card card-cascade wider reverse">

                            <div className="view view-cascade overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                                     alt="Sample image"/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <div className="card-body card-body-cascade text-center">
                                <h2 className="font-weight-bold"><a>Title of the blog</a></h2>
                                <p>Written by <a><strong>Abby Madison</strong></a>, 26/08/2018</p>
                                <div className="social-counters">
                                    <a className="btn btn-fb btn-sm">
                                        <i className="fab fa-facebook-f pr-2"></i>
                                        <span className="clearfix d-none d-md-inline-block">Facebook</span>
                                    </a>
                                    <span className="counter">46</span>
                                    <a className="btn btn-tw btn-sm">
                                        <i className="fab fa-twitter pr-2"></i>
                                        <span className="clearfix d-none d-md-inline-block">Twitter</span>
                                    </a>
                                    <span className="counter">22</span>
                                    <a className="btn btn-gplus btn-sm">
                                        <i className="fab fa-google-plus-g pr-2"></i>
                                        <span className="clearfix d-none d-md-inline-block">Google+</span>
                                    </a>
                                    <span className="counter">31</span>
                                    <a className="btn btn-default btn-sm">
                                        <i className="far fa-comments pr-2"></i>
                                        <span className="clearfix d-none d-md-inline-block">Comments</span>
                                    </a>
                                    <span className="counter">18</span>
                                </div>

                            </div>

                        </div>

                        <div className="mt-5">

                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum
                                deleniti atque
                                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique
                                sunt in culpa nemo enim ipsam voluptatem quia voluptas sit qui officia deserunt mollitia
                                animi, id
                                est laborum et dolorum fuga quidem rerum facilis est distinctio.
                            </p>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                                quod
                                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                Quis autem vel
                                eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                                Temporibus
                                autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                                voluptates
                                repudiandae sint et molestiae non recusandae itaque earum rerum.</p>

                        </div>

                        <div style={{
                            borderTop: '3px solid rgba(0, 0, 0, 0.1)'
                        }}
                        className={'container-fluid p-5'}
                        >
                            {!isAuthenticated ?
                                <div className={'mt-4'}>
                                    <h4 className={'font-weight-bold '}>
                                        Leave a reply
                                    </h4>

                                    <div className="row">
                                        <div className="col-md-6 smaller font-weight bold">
                                            0 Comments
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="form-group row">
                                                <label htmlFor="inputEmail"
                                                       className="col-sm-9 col-form-label">Sort By</label>
                                                <div className="col-sm-3 w-50">
                                                    <select className="browser-default custom-select">
                                                        <option value="1" defaultValue>Oldest</option>
                                                        <option value="2">Newest</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src={Image}  style={{
                                                height: '40px',
                                                width: '40px'
                                            }} alt=""/>
                                        </div>
                                        <div className="col-md-11">
                                            <textarea name="comment" className={'form-control'} />
                                        </div>
                                    </div>

                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-1">
                                            <img src={Image}  style={{
                                                height: '40px',
                                                width: '40px'
                                            }} alt=""/>
                                        </div>
                                        <div className="col-md-11">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                . Amet animi aperiam blanditiis deleniti ex exercitationem,
                                                fugit quisquam ratione sequi sunt tempore voluptatem
                                                voluptatum! Eius itaque magni natus omnis sequi voluptatum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className={'mt-4'}>

                                </div>
                            }
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-2 px-2">

                        <Link to={'/blogs'}>
                            View our Blogs
                        </Link>
                        <StickyBox offsetTop={100}>
                            <div className="row">
                                <div className="col-sm-12 col-md-12">

                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogContent;