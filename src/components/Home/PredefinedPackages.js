import React, {useState} from 'react';
import Kathmandu from '../../assets/images/kathmandu.jpeg'
import Pokhara from '../../assets/images/pokhara.jpg'

const PredefinedPackage = () => {
    return (
        <div>
        <div className={'view'}  style={{
            borderRadius: '20px'
        }}>
            <img src={Kathmandu}
                 alt="Image of ballons flying over canyons with mask pattern one." className={'premade-packages-view'}
                 style={{
                     borderRadius: '20px'
                 }}
            />
                <div className="mask rgba-stylish-strong d-flex align-items-end justify-content-around">
                    <p className="white-text text-lg">Kathmandu - Pokhara - Chitwan</p>
                    <p />
                </div>
        </div>

            <div className={'view mt-4'}  style={{
                borderRadius: '20px'
            }}>
                <img src={Pokhara}
                     alt="Image of ballons flying over canyons with mask pattern one." className={'premade-packages-view'}
                     style={{
                         borderRadius: '20px'
                     }}
                />
                <div className="mask rgba-stylish-strong d-flex align-items-end justify-content-around">
                    <p className="white-text text-lg">Kathmandu - Pokhara - Chitwan</p>
                    <p />
                </div>
            </div>
        </div>
    );
};

export default PredefinedPackage;