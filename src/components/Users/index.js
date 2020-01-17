import React, {useState} from 'react';
import StickyBox from 'react-sticky-box'

import Wallpaper from '../../assets/images/wallpaper.jpg'
import Kathmandu from '../../assets/images/kathmandu.jpeg'
import Dashboard from './Dashboard/'
import Profile from './Profile'
import Wishlist from './Wishlist/Wishlist'
import Blogs from './Blogs/Blogs'
import MyTrips from './MyTrips/MyTrips'

const Index = props => {

    const [activeTabs, setActiveTabs] = useState('dashboard');

    const handleTabs = (tabs) => {
        setActiveTabs(tabs);
    };

    return (
        <div>
            <div className="page-header header-filter" data-parallax="true" style={{
                backgroundImage: `url(${Wallpaper})`,
            }}/>
            <div style={{
                background : '#f2f2f2'
            }}>
                <div className="avatar text-center mx-5 mb-1 ">
                    <button className={'btn antelope-green-bg'} style={{
                        borderRadius: '50%',
                        transform: 'translate3d(0,-50%,0)',
                        padding: '0'
                    }}>
                        <img src={Kathmandu} alt="some name"
                             className={'img-raised rounded-circle profile-img-raised d-block'}/>
                    </button>
                    <h3 className={'h3-responsive'} style={{
                        marginTop: '-50px'
                    }}
                    >
                        User Name
                    </h3>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex">
                        <nav className="col-sm-12 col-md-2 px-5">
                            <StickyBox offsetTop={100}>
                            <ul className="nav nav-pills nav-pills-primary flex-column" >
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-4 px-1 ${activeTabs === 'dashboard' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`dashboard`)}>
                                        <i className="material-icons d-block">
                                            dashboard
                                        </i>
                                        Dashboard
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-4 px-1 ${activeTabs === 'profile' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`profile`)}>
                                        <i className="material-icons d-block">
                                            face
                                        </i>
                                        Profile
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-4 px-1 ${activeTabs === 'wishList' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`wishList`)}>
                                        <i className="material-icons d-block red-text">
                                            favorite
                                        </i>
                                        Wishlist
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-4 px-1 ${activeTabs === 'myTrips' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`myTrips`)}>
                                        <i className="material-icons d-block">
                                            airport_shuttle
                                        </i>
                                        My Trips
                                    </button>
                                </li>
                                <li className="nav-item mx-5 mb-2">
                                    <button
                                        className={`nav-link w-100  py-4 px-1 ${activeTabs === 'blog' && 'active'}`}
                                        data-toggle="tab" onClick={() => handleTabs(`blog`)}>
                                        <i className="material-icons d-block">
                                            menu_book
                                        </i>
                                        Blog
                                    </button>
                                </li>
                            </ul>
                            </StickyBox>
                        </nav>
                        <div className="col-sm-12 col-md-8">
                            <div className="tab-content p-0">
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
                        <div className="col-sm-12 col-md-2 px-5">
                            <StickyBox offsetTop={100} >
                            <div className="row">
                                <div className="col-sm-12 col-md-12">

                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </StickyBox>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Index;