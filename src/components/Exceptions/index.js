import React from 'react';
import NotFoundImage from '../../assets/images/notFound.png'

const NotFound = () => {
    return (
        <div className={'container p-5 d-flex justify-content-center align-items-center'} style={{
            height: '100vh'
        }}>
            <div>
                <img src={NotFoundImage} alt="" style={{
                    height: '400px',
                    width: 'auto'
                }}/>

                <h1 className={'  font-weight-bold text-center'}>
                    Sorry, the page does not exist.
                </h1>
            </div>

        </div>
    );
};

export default NotFound;