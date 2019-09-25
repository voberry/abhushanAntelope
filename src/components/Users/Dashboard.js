import React from 'react';
import Charts from './Charts'
import {MDBInput} from "mdbreact";

const Dashboard = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h5> Number of trips</h5>
                            <h6>10</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h5> Points </h5>
                            <h6>1000 </h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h5> Advertisement </h5>
                            <h6>Some stuff</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 chart-canvas mt-3">
                    <Charts />
                </div>

                <div className="col-md-12 mt-3 ">
                    <form className={'card p-4'}>
                        <p className="h4 mb-4">Review</p>
                        <label className="grey-text">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                        />
                        <br />
                        <label className="grey-text">
                            Share your experience
                        </label>
                        <textarea rows={5}
                            className="form-control"
                        />
                        <div className="mt-4">
                            <button className={'btn antelope-green-bg white-text'}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;