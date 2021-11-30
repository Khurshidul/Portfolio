import React from 'react';
import './Resume.css';
import myResume from '../../resume/khurhidul-Resume.pdf';
const Resume = () => {
    return (
        <div className='resume-section'>
            <h1 className="text text-center text-light">My Resume</h1>
            <devicePixelRatio>
                <iframe className="resume-file" src={myResume} />
                
            </devicePixelRatio>
        </div>
    );
};

export default Resume;