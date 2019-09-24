import React from 'react';
import Pokhara from "../../assets/images/pokhara.jpg";

const Index = () => {
    return (
        <div>
            <div className="page-header header-filter" data-parallax="true" style={{
                backgroundImage: `url(${Pokhara})`,
            }}/>
        </div>
    );
};

export default Index;