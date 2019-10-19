import React from 'react';
import Kathmandu from "../../assets/images/kathmandu.jpeg";

const Index = () => {
    return (
        <div>
            <div className="page-header header-filter" data-parallax="true" style={{
                backgroundImage: `url(${Kathmandu})`,
            }}/>
        </div>
    );
};

export default Index;