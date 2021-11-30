import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light appBar">
            <div className="container-fluid">
                <Link to='/resume'>
                <button className='btn btn-home'>Resume</button>
               </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active" aria-current="page" href="#">
                                <button className='btn btn-home'>Home</button>
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link to='/blogs' className="nav-link active" aria-current="page" href="#">
                                <button className='btn btn-home'>Blogs</button>
                            </Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active" aria-current="page" href="#">
                                <button className='btn btn-home'>About</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active" aria-current="page" href="#">
                                <button className='btn btn-home'>Contact</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;