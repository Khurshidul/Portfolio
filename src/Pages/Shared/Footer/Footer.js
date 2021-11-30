import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div data-aos="fade-up-left" className = "footer-icon">
                <h1 className="footer-title">Contact Me</h1>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-whatsapp-square"></i>
                <p>This is my portfolio project. Here are details about me.</p>
               
                
            </div>
            <div className="footer-menu">
                <br /><br />
                <NavLink data-aos="fade-down-left" style={{textDecoration: 'none'}} to = "/home">Home</NavLink>
                <br />
                <br />
                <NavLink data-aos="fade-left" style={{textDecoration: 'none'}} to = "/about">About</NavLink>
                <br />
                <br />
                <NavLink data-aos="fade-up-right" style={{textDecoration: 'none'}} to = "/contact">Contact</NavLink>
                <br />
                <br />
                <NavLink data-aos="flip-up" style={{textDecoration: 'none'}} to = "/blogs">Blogs</NavLink>

            </div>
            <div className="contact-item">
                <h4 data-aos="zoom-in-down" className="text-primary">Sign Up for the newsletter</h4>
                <label data-aos="fade-up-left" htmlFor="email">Email:   
                <input type="email" name="email" placeholder="Enter your email" id="" />
                </label>
                <p data-aos="zoom-in-down"><i class="fas fa-phone-square-alt"></i> <span className="text-light">:01851*****</span> </p>
                <p data-aos="zoom-in-down"><i class="fas fa-map-marked-alt"></i> <span data-aos="zoom-in-down" className="text-white">: D.T Sagorika,Pahartali,  <br/> Chittagong,Bangladesh</span> </p>
            </div>
        </div>
    );
};

export default Footer;