import React from 'react';
import 'animate.css';
import './Home.css';
import khushi from '../../../images/khushi.jpg';
import About from '../About/About';
import MyProjects from '../MyProjects/MyProjects';
import Contacts from '../Contacts/Contacts';

const Home = () => {
    return (
        <div className="home">

            <div className="row">
                <div data-aos="flip-left" className="col-md-4">
                    <img className="ms-5 mt-5" width="70%" src={khushi} alt="" />

                </div>
                <div className="col-md-8 top-header">
                    <h2 data-text="I am Khurshidul Alam">I am Khurshidul Alam</h2>
                    <h4 data-text="Junior Web Developer">Junior Web Developer</h4>
                </div>
            </div>
            <div className='About-section'>
                <About />
            </div>
            <div className='project-section mt-5'>
                <MyProjects />
            </div>
            <div className='project-section mt-5'>
                <Contacts />
            </div>

        </div>
    );
};

export default Home;