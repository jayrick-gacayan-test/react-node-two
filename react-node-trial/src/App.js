import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* css */
import './css/basic.css';
import './css/classname.css';
import './css/mediaquery.css';

import './css/custom.css';
 
import imgWheatField from './img_wheat_field.jpeg';
import sackOfRice from './img_sack_of_rice.png';

/* Components */
import TopNavigation from './components/layouts/TopNavigation';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import Products from './components/pages/Products';
import SidebarNavigation from './components/layouts/SidebarNavigation';

const App = () => {
    return(
        <>
            <SidebarNavigation />
            <TopNavigation />
            <div className="container-fluid pos-relative image-to-mask-1" 
                 style={{backgroundImage: `url(${ imgWheatField })`}}>
                <div className="container-fluid image-mask-overlay">
                    
                    <div className="container"
                        style={{
                            paddingTop: "140px"
                        }}>
                        <div className="row pt-2">
                            <div className="col-33-point-3333-percent white-text">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="col-66-point-6667-percent">
                                <img src={ sackOfRice } alt="Sack of Rice"
                                    style={{
                                        height: "500px",
                                        width: "100%"
                                    }}/>

                                <div style={{
                                    height: "500px",
                                    zIndex: 15,
                                    backgroundColor: "rgba(0,0,0,1)",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Routes>
                <Route exact path="/" element={ <HomePage /> } />
                <Route exact path="/about" element={ <AboutUsPage /> }/>
                <Route exact path="/products" element={ <Products />} />
            </Routes>
            <footer className="container-fluid"
                style={{
                    backgroundColor: "rgba(33, 37, 41, 0.8)"}}>
                <div className="container py-5 text-center">
                    <p style={{ color: "white "}}> Copyright@2019<b>.com</b></p>
                </div>
            </footer>
        </>
    );

};

export default App;

