import React from 'react';
import Pokhara from '../../../assets/images/pokhara.jpg'
import Kathmandu from '../../../assets/images/kathmandu.jpeg'
import chitwan from '../../../assets/images/chitwan.jpg'

const Wishlist = () => {
    return (
        <div>
            <div className="container">
                <div className="card card-plain">
                    <div className="card-body">
                        <h3 className="card-title font-poppins">Shopping Cart</h3>
                        <br />
                        <div className="table-responsive">
                            <table className="table table-shopping">
                                <thead>
                                <tr>
                                    <th className="text-center" />
                                    <th>Trip Name</th>
                                    <th className="th-description">Days</th>
                                    <th className="text-right">Class</th>
                                    <th className="text-right">Price</th>
                                    <th />
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={'w-25'}>
                                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                            <img src={Pokhara} className={'img-fluid'} alt="..." />
                                            <a>
                                                <div className="mask rgba-white-slight" />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="td-name w-50">
                                        <a className={'font-weight-bold'}>Pokhara Trip</a>
                                        <br />
                                        <small className={'font-libre-franklin grey-text'}> Kathmandu - Chitwan - Pokhara</small>
                                    </td>
                                    <td className={'w-25 font-weight-bold'}>
                                        7
                                        <br/>
                                        <small className={'font-libre-franklin grey-text'}>1st September - 9th September</small>
                                    </td>
                                    <td className={'font-weight-bold'} style={{
                                        width: '10%'
                                    }}>
                                        Economy
                                    </td>
                                    <td className="td-number text-right w-25 font-weight-bold" style={{
                                        width: '10%'
                                    }}>
                                        <small>€</small>549
                                    </td>
                                    <td className="td-actions" style={{
                                        width: '10%'
                                    }}>
                                        <button type="button" rel="tooltip" data-placement="left" title=""
                                                className="btn btn-link" data-original-title="Remove item">
                                            <i className="material-icons red-text">delete</i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className={'w-25'}>
                                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                            <img src={Kathmandu} className={'img-fluid'} alt="..." />
                                            <a>
                                                <div className="mask rgba-white-slight" />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="td-name w-50">
                                        <a  className={'font-weight-bold'}>Kathmandu Trip</a>
                                        <br />
                                        <small className={'font-libre-franklin grey-text'}> Kathmandu - Chitwan - Pokhara</small>
                                    </td>
                                    <td className={'w-25 font-weight-bold'}>
                                        7
                                        <br/>
                                        <small className={'font-libre-franklin grey-text'}>1st September - 9th September</small>
                                    </td>
                                    <td className={'font-weight-bold'} style={{
                                        width: '10%'
                                    }}>
                                        Premium
                                    </td>
                                    <td className="td-number text-right font-weight-bold" style={{
                                        width: '10%'
                                    }}>
                                        <small>€</small>549
                                    </td>
                                    <td className="td-actions" style={{
                                        width: '10%'
                                    }}>
                                        <button type="button" rel="tooltip" data-placement="left" title=""
                                                className="btn btn-link" data-original-title="Remove item">
                                            <i className="material-icons red-text">delete</i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className={'w-25'}>
                                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                            <img src={chitwan} className={'img-fluid'} alt="..." />
                                            <a>
                                                <div className="mask rgba-white-slight" />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="td-name w-50">
                                        <a  className={'font-weight-bold'}>Chitwan Trip</a>
                                        <br />
                                        <small className={'font-libre-franklin grey-text'}> Kathmandu - Chitwan - Pokhara</small>
                                    </td>
                                    <td className={'w-25 font-weight-bold'}>
                                        7
                                        <br/>
                                        <small className={'font-libre-franklin grey-text'}>1st September - 9th September</small>
                                    </td>
                                    <td className={'font-weight-bold'} style={{
                                        width: '10%'
                                    }}>
                                        Moderate
                                    </td>
                                    <td className="td-number text-right font-weight-bold" style={{
                                        width: '10%'
                                    }}>
                                        <small>€</small>549
                                    </td>
                                    <td className="td-actions" style={{
                                        width: '10%'
                                    }}>
                                        <button type="button" rel="tooltip" data-placement="left" title=""
                                                className="btn btn-link" data-original-title="Remove item">
                                            <i className="material-icons red-text">delete</i>
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="4" />
                                    <td className="td-total">
                                        Total
                                    </td>
                                    <td colSpan="1" className="td-price">
                                        <small>€</small>2,346
                                    </td>
                                    <td colSpan="1" />
                                </tr>

                                <tr>
                                    <td colSpan="6" className="text-right">
                                        <button type="button" className="btn antelope-green-bg white-text btn-round">Complete
                                            Purchase <i className="material-icons mt-2">keyboard_arrow_right</i></button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;