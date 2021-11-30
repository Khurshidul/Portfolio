import React from 'react';
import 'animate.css';
import './About.css';
const About = () => {

    return (
        <div className='about-bg'>
            <div className="about-me" data-aos="fade-right">
                <div className="card-body scroll-element js-scroll slide-left">
                    <h3 className="card-title text-light animate__animated animate__bounce animate__slower">ABOUT ME</h3>
                    <p className="card-text text-primary">I am Khurshidul Alam. I am a junior web developer of react js. I gathered my knowledge from programming hero team. MY educator Jhankar Mahabub sir is the best trainer of my programming life. I always like to learn new thing. Still I'm learning and working hardly to be a good developer.
                    <br />
                    <br />
                    I love my religion in the world. I like to read books specially about my religion and my honorable prophets. I also like to teach anythings what I knew.
                    </p>
                    <button className="btn about-btn">Contact Me</button>
                    <button className="btn about-btn">More About</button>

                </div>
            </div>
        </div>
    );
};

export default About;