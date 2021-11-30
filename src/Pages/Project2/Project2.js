import React from 'react';
import './Project2.css';
import img1 from '../../images/Screenshot (40).png';
import img2 from '../../images/Screenshot (41).png';
import img3 from '../../images/Screenshot (42).png';
const Project2 = () => {
    return (
        <div className='project1-section'>
            <div className='project-imgs'>

                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />


            </div>
            <div className='text text-center text-light'>
                - There have a news section where included many about agency news. <br />
                - There have a admin panel where admin can control the website. <br />
                - In this project user can purchase his/her booking. <br />
            </div>

        </div>
    );
};

export default Project2;