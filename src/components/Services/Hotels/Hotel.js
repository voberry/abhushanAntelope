import React from "react";
import {Link} from "react-router-dom";
import StickyBox from "react-sticky-box";
import HotelsCarousel from "./HotelsCarousel";
import HotelsLocation from "./HotelLocation";

import Wallpaper from "../../../assets/images/wallpaper.jpg";

const imageStyle = {
    height: '100px',
    width: '150px',
    borderRadius: '10%'
};


const Hotel = () => {
    return (
        <div className="mt-5 pt-5">
            <div className={"gray-background"}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 p-5">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <h3 className={"h3-responsive antelope-green"}>Hotel 1</h3>
                                    <h6 className={"grey-text small"}>
                                        <i className="fas fa-map-marked-alt fa-sm red-text pr-2"/>
                                        Kapan, Kathmandu, Nepal
                                    </h6>
                                </div>

                                <div className="col-md-3 col-sm-12 ">
                                    <button
                                        className={
                                            "btn antelope-green-bg-light white-text white-text btn-sm float-right mt-3"
                                        }
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <div className={"z-depth-4 thumbnailCarousels"}>
                                        <HotelsCarousel/>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <HotelsLocation/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-7">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="font-weight-bolder mb-3 antelope-green h4-responsive">
                                                <strong>Kathmandu</strong>
                                            </h4>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Aliquid delectus enim eum harum quae tenetur,
                                                ullam? Ab adipisci aut culpa earum perspiciatis porro
                                                quis quisquam reiciendis velit veritatis, voluptas
                                                voluptates? Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Accusamus animi, commodi doloribus
                                                magnam magni modi placeat quia quidem sint ut!
                                                Asperiores consectetur dolores, eos itaque magni omnis
                                                quisquam reprehenderit voluptatum!
                                                <br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="font-weight-bolder mb-3 antelope-green h6-responsive">
                                                <strong>Facilities</strong>
                                            </h6>
                                            <ul className="list-group">
                                                <li className="list-group-item">Cras justo odio</li>
                                                <li className="list-group-item">
                                                    Dapibus ac facilisis in
                                                </li>
                                                <li className="list-group-item">Morbi leo risus</li>
                                                <li className="list-group-item">
                                                    Porta ac consectetur ac
                                                </li>
                                                <li className="list-group-item">Vestibulum at eros</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'card mt-5'}>
                                <div className="card-body">
                                    <h4 className="card-title font-weight-bold antelope-green"><a>Available Rooms</a></h4>
                                    <table className="table table-borderless">
                                        <tbody>
                                        <tr>
                                            <th className={'w-25'}>
                                                <img
                                                    src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                        Math.random() * 100
                                                    )}.jpg`}
                                                    alt=""
                                                    className={'img-fluid z-depth-4'}
                                                    style={imageStyle}
                                                />
                                            </th>
                                            <td><h4 className={'font-weight-bold mb-1'}>Kathmandu Room</h4>
                                              <h6 className={'font-weight-bold grey-text'}>
                                                Adults 2, Child 1
                                              </h6>
                                              <div className="row">
                                                <div className="col-xs-6 col-md-5 go-right">
                                                  <p>No. Rooms</p>
                                                </div>
                                                <div className="col-xs-6 col-md-4 go-left">
                                                  <select className="browser-default custom-select w-50">
                                                  <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                  </select>
                                                </div>
                                              </div>
                                            </td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                          <th className={'w-25'}>
                                            <img
                                                src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                    Math.random() * 100
                                                )}.jpg`}
                                                alt=""
                                                className={'img-fluid z-depth-4'}
                                                style={imageStyle}
                                            />
                                          </th>
                                          <td><h4 className={'font-weight-bold mb-1'}>Double Deluxe Room</h4>
                                            <h6 className={'font-weight-bold grey-text'}>
                                              Adults 2, Child 1
                                            </h6>
                                            <div className="row">
                                              <div className="col-xs-6 col-md-5 go-right">
                                                <p>No. Rooms</p>
                                              </div>
                                              <div className="col-xs-6 col-md-4 go-left">
                                                <select className="browser-default custom-select w-50">
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                  <option value="6">6</option>
                                                  <option value="7">7</option>
                                                  <option value="8">8</option>
                                                  <option value="9">9</option>
                                                  <option value="10">10</option>
                                                </select>
                                              </div>
                                            </div>
                                          </td>
                                          <td>Otto</td>
                                          <td>@mdo</td>
                                        </tr>
                                        <tr>
                                          <th className={'w-25'}>
                                            <img
                                                src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                                                    Math.random() * 100
                                                )}.jpg`}
                                                alt=""
                                                className={'img-fluid z-depth-4'}
                                                style={imageStyle}
                                            />
                                          </th>
                                          <td><h4 className={'font-weight-bold mb-1'}>Kathmandu Room</h4>
                                            <h6 className={'font-weight-bold grey-text'}>
                                              Adults 2, Child 1
                                            </h6>
                                            <div className="row">
                                              <div className="col-xs-6 col-md-5 go-right">
                                                <p>No. Rooms</p>
                                              </div>
                                              <div className="col-xs-6 col-md-4 go-left">
                                                <select className="browser-default custom-select w-50">
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                  <option value="5">5</option>
                                                  <option value="6">6</option>
                                                  <option value="7">7</option>
                                                  <option value="8">8</option>
                                                  <option value="9">9</option>
                                                  <option value="10">10</option>
                                                </select>
                                              </div>
                                            </div>
                                          </td>
                                          <td>Otto</td>
                                          <td>@mdo</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div
                                className={
                                    "p-4 mt-4 antelope-green-bg-light white-text white-text"
                                }
                            >
                                <h4>
                                    {" "}
                                    Price : 1400/day
                                    <button className={"btn btn-sm btn-danger float-right"}>
                                        Book Now
                                    </button>
                                </h4>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-2 p-5 px-2">
                            <Link to={"/blogs"}>Other Hotels in this area</Link>
                            <StickyBox offsetTop={100}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                        <div className="card mb-3">
                                            <div className="card-title antelope-green">
                                                <img src={Wallpaper} alt="" className={"w-100"}/>
                                            </div>

                                            <div className="card-body grey-text ">Ad stuff</div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-title antelope-green">
                                                <img src={Wallpaper} alt="" className={"w-100"}/>
                                            </div>

                                            <div className="card-body grey-text ">Ad stuff</div>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-title antelope-green">
                                                <img src={Wallpaper} alt="" className={"w-100"}/>
                                            </div>

                                            <div className="card-body grey-text ">Ad stuff</div>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
