import React from 'react';
import Charts from './Charts'

const Index = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h5 className={'h5-responsive'}> Number of trips</h5>
                            <h6 className={'h6-responsive'}>10</h6>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h5 className={'h5-responsive'}> Points </h5>
                            <h6 className={'h6-responsive'}>1000 </h6>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h5 className={'h5-responsive'}> Advertisement </h5>
                            <h6 className={'h6-responsive'}>Some stuff</h6>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 chart-canvas mt-3">
                    <Charts />
                </div>

                <div className="col-sm-12 col-md-12 mt-3 ">
                    <form className={'card p-4'}>
                        <p className="h4-responsive mb-4">Review</p>
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
                            <button className={'btn antelope-green-bg-light white-text white-text'}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Index;