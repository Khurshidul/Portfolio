import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../../images/Screenshot (34).png';
import project2 from '../../../images/Screenshot (36).png';
import './MyProject.css';
const MyProjects = () => {
    return (
        <div>
            <h1 className="text text-light project-header animate__animated animate__slideInRight  animate__slower">My Projects</h1>
            <div className='row projects-section'>

                <div data-aos="fade-down-left" className="col-md-5 ms-5 project1">
                    <img src={project1} className="img-fluid card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">About Project</h5>
                        <p class="card-text">
                            - This is a car's website for online sell. <br />
                            - It will be a full-stack project. I am updating this project.<br />
                            - Any user can login and purchase order.<br />

                        </p>
                        <div className="project-btn">
                            <a href="https://genius-car-mechanic-6de64.web.app/">
                                <button className="btn project1">Client</button>
                            </a>
                            <a href="https://github.com/Khurshidul/Maruti-car-zone-client-site">
                                <button className="btn project1">Github</button>
                            </a>
                            <Link to='/details'>
                                <button className="btn project1">EXPLORE</button>
                            </Link>

                        </div>

                    </div>
                </div>
                <div data-aos="fade-up-right" className="col-md-5 project2">
                    <img src={project2} className="img-fluid card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">About Project</h5>
                        <p class="card-text">
                            - It is tourism agency. Where you can register to visit anywhere.
                            - There have so many services for our visitor as if he/she can enjoy his tour.
                            - The assency provide flat hotel service where have two rooms for each visitor and also have a fresh bed.
                        </p>
                        <div className="project-btn">
                            <a href="https://happy-tour-20c74.web.app/home#home">
                                <button className="btn project1">Client</button>
                            </a>
                            <a href="https://github.com/Khurshidul/Happy-Tour">
                                <button className="btn project1">Github</button>

                            </a>
                            <Link to='/details2'>
                                <button className="btn project1">EXPLORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;