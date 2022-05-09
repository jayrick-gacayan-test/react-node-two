import React from 'react';
import './top-navigation.css';

const TopNavigation = () => {
    return (
        <header id="topNav" className="container-fluid">
            <div className="container">
                <nav>
                    <a className="navbar-logo">Logo Here</a>
                    <div className="menu-icon-container">
                        <span className="menu-bar"></span>
                        <span className="menu-bar"></span>
                        <span className="menu-bar"></span>
                    </div>
                    <ul className="navbar">
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/products">Products</a>
                        </li>
                        <li className="navbar-item">
                            <a className="navbar-link" href="/about">About us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );  
};

export default TopNavigation;