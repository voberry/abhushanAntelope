import React, { Component, Fragment } from 'react';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <section className="my-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 my-5 text-center">
                                <h2>Send instantly at lowest transfer fees</h2>
                            </div>
                            <div className="col-md-4 media">
                                <i className="icon ion-md-wallet h1 mr-4"></i>
                                <div className="media-content"><h5>Low fees</h5>
                                    <p>We provide low fees and competitive exchange rate without any hidden fees.</p></div>
                            </div>

                            <div className="col-md-4 media">
                                <i className="icon ion-md-flash h1 mr-4"></i>
                                <div className="media-content"><h5>Fast</h5>
                                    <p>You can send money to your loved ones in a few minutes.</p></div>
                            </div>
                            <div className="col-12 my-4"></div>
                            <div className="col-md-4 media">
                                <i className="icon ion-md-happy h1 mr-4"></i>
                                <div className="media-content"><h5>Simple</h5>
                                    <p>Send money easily and we are here to assist you 24/7.</p></div>
                            </div>

                            <div className="col-md-4 media">
                                <i className="icon ion-md-medal h1 mr-4"></i>
                                <div className="media-content"><h5>Trusted</h5>
                                    <p>Strong and Robust security system to keep your money safe.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;
