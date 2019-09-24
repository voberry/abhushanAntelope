import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div className='row'>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h4> Number of trips</h4>
                            <h6>10</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h4> Points </h4>
                            <h6>1000 </h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body ">
                            <h4> Advertisement </h4>
                            <h6>Some stuff</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;