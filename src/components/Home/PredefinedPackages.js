import React, {useState} from 'react';
import Kathmandu from '../../assets/images/kathmandu.jpeg'


const PredefinedPackage = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleRotateCard = () => {
        setIsFlipped(!isFlipped)}

    return (
        <div>
            <div className={`card-container manual-flip ${isFlipped && 'hover'}`}>
                <div className="card">
                    <div className="front">
                        <div className="cover">
                            <img src={Kathmandu} alt={'Kathmandu'}/>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h3 className="name">Kathmandu</h3>
                                <p className="profession">Temple City</p>
                                <p className="text-center">"Kathmandu is the bae"</p>
                            </div>
                            <div className="footer">
                                <button className="btn btn-simple" onClick={()=>handleRotateCard()}>
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="header">
                            <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h4 className="text-center">Job Description</h4>
                                <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                                    others...</p>

                                <div className="stats-container">
                                    <div className="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footer">
                            <button className="btn btn-simple" rel="tooltip" title="Flip Card"
                                    onClick={()=>handleRotateCard()}>
                                <i className="fa fa-reply"/> Back
                            </button>
                            <div className="social-links text-center">
                                <a href="https://creative-tim.com" className="facebook"><i
                                    className="fa fa-facebook fa-fw"/></a>
                                <a href="https://creative-tim.com" className="google"><i
                                    className="fa fa-google-plus fa-fw"/></a>
                                <a href="https://creative-tim.com" className="twitter"><i
                                    className="fa fa-twitter fa-fw"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredefinedPackage;