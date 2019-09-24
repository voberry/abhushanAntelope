import React, {useState} from 'react';
import Pokhara from '../../assets/images/pokhara.jpg'
import Kathmandu from '../../assets/images/kathmandu.jpeg'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Wishlist from './Wishlist'
import Blogs from './Blogs'
import MyTrips from './MyTrips'

const ProfilePage = props => {

    const [activeTabs, setActiveTabs] = useState('dashboard');

    const handleTabs = (tabs) => {
        setActiveTabs(tabs);
    };

    return (
        <div>
            <div className="page-header header-filter" data-parallax="true" style={{
                backgroundImage: `url(${Pokhara})`,
            }}/>

            <div className={'main main-raised'}>

                <div className="container-fluid pt-5">
                    <div className="row d-flex align-items-stretch">
                        <div className="col-md-3">

                            <div className="avatar text-center mx-5 ">
                                <img src={Kathmandu} alt="some name"
                                     className={'img-raised rounded-circle profile-img d-block'}/>

                                <button className={'btn btn-info btn-sm'}>
                                    Upload
                                </button>
                            </div>

                            <ul className="nav nav-pills nav-pills-primary flex-column">
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-2 px-1 ${activeTabs === 'dashboard' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`dashboard`)}>
                                        <i className="material-icons d-block">
                                            dashboard
                                        </i>
                                        Dashboard
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-2 px-1 ${activeTabs === 'profile' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`profile`)}>
                                        <i className="material-icons d-block">
                                            face
                                        </i>
                                        Profile
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-2 px-1 ${activeTabs === 'wishList' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`wishList`)}>
                                        <i className="material-icons d-block red-text">
                                            favorite
                                        </i>
                                        Wishlist
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-2 px-1 ${activeTabs === 'myTrips' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`myTrips`)}>
                                        <i className="material-icons d-block">
                                            airport_shuttle
                                        </i>
                                        My Trips
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-3 px-1 ${activeTabs === 'blog' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`blog`)}>
                                        <i className="material-icons d-block">
                                            menu_book
                                        </i>
                                        Blog
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div className={`tab-pane ${activeTabs === 'dashboard' && 'active'}`}>
                                    <Dashboard/>
                                </div>
                                <div className={`tab-pane ${activeTabs === 'profile' && 'active'}`}>
                                    <Profile/>
                                </div>
                                <div className={`tab-pane ${activeTabs === 'wishList' && 'active'}`}>
                                    <Wishlist/>
                                </div>
                                <div className={`tab-pane ${activeTabs === 'myTrips' && 'active'}`}>
                                    <MyTrips/>
                                </div>
                                <div className={`tab-pane ${activeTabs === 'blog' && 'active'}`}>
                                    <Blogs/>
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