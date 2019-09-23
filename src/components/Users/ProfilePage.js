import React from 'react';
import Pokhara from '../../assets/images/pokhara.jpg'
import Kathmandu from '../../assets/images/kathmandu.jpeg'

const ProfilePage = props => {
    return (
        <div>
            <div className="page-header header-filter" data-parallax="true" style={{
                backgroundImage: `url(${Pokhara})`,
            }}/>

            <div className={'main main-raised'}>
                <div className="profile-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto mr-auto">
                                <div className="profile">
                                    <div className="avatar">
                                        <img src={Kathmandu} alt="some name" className={'img-raised rounded-circle profile-img'}/>
                                    </div>
                                </div>

                                <div className="name text-center">
                                    <h3 >Aabhushan Gautam</h3>
                                    <h6>React Developer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProfilePage;