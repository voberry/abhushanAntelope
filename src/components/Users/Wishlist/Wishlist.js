import React from 'react';
import {MDBDataTable} from "mdbreact";
import {withRouter, Link} from 'react-router-dom'
import Pokhara from '../../../assets/images/pokhara.jpg'
import Kathmandu from '../../../assets/images/kathmandu.jpeg'
import chitwan from '../../../assets/images/chitwan.jpg'


const imageStyle = {
    height: '100px',
    width: '150px',
    borderRadius: '10%'
};

const Wishlist = () => {
    const data = {
        columns: [
            {
                label: 'Location',
                field: 'image',
                width: 150
            },
            {
                label: 'Trip Name',
                field: 'tripName',
                sort: 'asc',
                width: 250,
                searchable: true,
            },
            {
                label: 'Class',
                field: 'class',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Price',
                field: 'price',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Actions',
                field: 'actions',
                sort: 'asc',
                width: 250
            },

        ],
        rows: [
            {
                image: <img src={Pokhara} className={'img-fluid z-depth-4'} alt="..." style={imageStyle}/>,
                tripName: 'Pokhara',
                class: 'Premium',
                price: <div className={'font-weight-bold'}> $400</div>,
                actions: <div>
                    <Link to={`/users/Pokhara/checkout`}>
                        <button className={'btn antelope-green-bg btn-sm white-text d-block'}> Checkout</button>
                    </Link>
                    <a className={'red-text d-block text-center'}> Delete </a>
                </div>
            },
            {
                image: <img src={Kathmandu} className={'img-fluid z-depth-4'} alt="..." style={imageStyle}/>,
                tripName: 'Kathmandu',
                class: 'Moderate',
                price: <div className={'font-weight-bold'}> $400</div>,
                actions: <div>
                    <Link to={`/users/Pokhara/checkout`}>
                        <button className={'btn antelope-green-bg btn-sm white-text d-block'}> Checkout</button>
                    </Link>
                    <a className={'red-text d-block text-center'}> Delete </a>
                </div>
            },
            {
                image: <img src={chitwan} className={'img-fluid z-depth-4'} alt="..." style={imageStyle}/>,
                tripName: 'Chitwan',
                class: 'Economy',
                price: <div className={'font-weight-bold'}> $400</div>,
                actions: <div>
                    <Link to={`/users/Pokhara/checkout`}>
                        <button className={'btn antelope-green-bg btn-sm white-text d-block'}> Checkout</button>
                    </Link>
                        <a className={'red-text d-block text-center'}> Delete </a>
                </div>
            },
        ]
    };


    return (
        <div>
            <div className="container">
                <div className="card card-plain">
                    <div className="card-body">
                        <h3 className="card-title main-text">WishList</h3>
                        <br/>
                        <MDBDataTable
                            striped
                            data={data}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Wishlist);