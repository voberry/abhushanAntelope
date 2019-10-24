import React from 'react';

const MyTrips = () => {
    return (
        <div>
            <h5 className={'main-text text-center font-weight-bold h5-responsive'}>My Trips</h5>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <div className="timeline-main">
                        <ul className="stepper stepper-vertical timeline timeline-simple timeline-images pl-0">

                            <li>
                                <a href="#!">
                                    <span className="circle cyan lighten-1">1</span>
                                </a>

                                <div className="step-content ml-3 p-0 hoverable">
                                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg"
                                         className="img-fluid"
                                         alt="Responsive image" />
                                        <h4 className="font-weight-bold p-4 mb-0">Ut enim ad minim veniam</h4>
                                        <p className="text-muted px-4 mb-0"><i className="far fa-clock"
                                                                               aria-hidden="true"/> 2017</p>
                                        <p className="mb-0 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <a href="#!">
                                    <span className="circle cyan lighten-1">2</span>
                                </a>

                                <div className="step-content mr-xl-3 p-0 hoverable">
                                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                                         className="img-fluid"
                                         alt="Responsive image" />
                                        <h4 className="font-weight-bold p-4 mb-0">Duis aute irure dolor</h4>
                                        <p className="text-muted px-4 mb-0"><i className="far fa-clock"
                                                                               aria-hidden="true"/> 2016</p>
                                        <p className="mb-0 p-4">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi
                                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                            quia voluptas sit
                                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem
                                            sequi nesciunt.</p>
                                </div>
                            </li>
                            <li>
                                <a href="#!">
                                    <span className="circle cyan lighten-1">3</span>
                                </a>

                                <div className="step-content ml-3 p-0 hoverable">
                                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg"
                                         className="img-fluid"
                                         alt="Responsive image" />
                                        <h4 className="font-weight-bold p-4 mb-0">Sed ut nihil unde omnis</h4>
                                        <p className="text-muted px-4 mb-0"><i className="far fa-clock"
                                                                               aria-hidden="true"/> 2015</p>
                                        <p className="mb-0 p-4">Neque porro quisquam est, qui dolorem ipsum quia dolor
                                            sit amet, consectetur,
                                            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                            dolore magnam
                                            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                            exercitationem ullam corporis
                                            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                                            vel eum iure
                                            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                            consequatur, vel illum qui
                                            dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <a href="#!">
                                    <span className="circle cyan lighten-1">4</span>
                                </a>

                                <div className="step-content mr-xl-3 p-0 hoverable">
                                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg"
                                         className="img-fluid"
                                         alt="Responsive image" />
                                        <h4 className="font-weight-bold p-4 mb-0"> Quis autem vel eum voluptate</h4>
                                        <p className="text-muted px-4 mb-0"><i className="far fa-clock"
                                                                               aria-hidden="true"/> 2014</p>
                                        <p className="mb-0 p-4">At vero eos et accusamus et iusto odio dignissimos
                                            ducimus qui blanditiis
                                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                            molestias excepturi sint
                                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                                            deserunt mollitia animi,
                                            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                            expedita distinctio.</p>
                                </div>
                            </li>
                            <li>
                                <a href="#!">
                                    <span className="circle cyan lighten-1">5</span>
                                </a>

                                <div className="step-content ml-3 p-0 hoverable">
                                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
                                         className="img-fluid"
                                         alt="Responsive image" />
                                        <h4 className="font-weight-bold p-4 mb-0">Mussum ipsum cacilds</h4>
                                        <p className="text-muted px-4 mb-0"><i className="far fa-clock"
                                                                               aria-hidden="true"/> 2013</p>
                                        <p className="mb-0 p-4">Temporibus autem quibusdam et aut officiis debitis aut
                                            rerum necessitatibus
                                            saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                            Itaque earum rerum
                                            hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                                            alias consequatur aut
                                            perferendis doloribus asperiores repellat.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTrips;