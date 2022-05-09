import React, { Component } from 'react';

import ImagePremSinandomeng from '../../image_rice/img_prem_sinandomeng.png';
import ImagePremWholeGrain from '../../image_rice/img_prem_whole_grain.png';
import ImagePremSuperAngelica from '../../image_rice/img_prem_super_angelica.png';

import ImageSpecSinandomeng from '../../image_rice/img_spec_sinandomeng.png';
import ImageSpecWholeGrain from '../../image_rice/img_spec_whole_grain.png';
import ImageMalagkit from '../../image_rice/img_malagkit.png';

export default class Products extends Component{
    render(){
        return(
            <main className="container-fluid background-color-white">
                <section id="product-list-section"
                        className="container section-1 text-center">
                    <h2>Choose your favorites.....</h2>
                    <div className="row mb-4">
                        <div className="col-33-point-3333-percent">
                            <div className="product-card-1">
                                <img src={ ImagePremSinandomeng } 
                                    alt="premium-sinandomeng" 
                                    className="product-image" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-33-point-3333-percent">
                            <div className="product-card-1">
                                <img src={ ImagePremWholeGrain } 
                                    alt="premium-whole-grain"
                                    className="product-image"/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-33-point-3333-percent">
                            <div className="product-card-1">
                                <img src={ ImagePremSuperAngelica } 
                                    alt="premium-super-angelica"
                                    className="product-image" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-33-point-3333-percent">
                            <div className="product-card-1">
                                <img src={ ImageSpecSinandomeng } 
                                    alt="special-sinandomeng"
                                    className="product-image" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-33-point-3333-percent">
                            <div className="product-card-1">
                                <img src={ ImageSpecWholeGrain } 
                                    alt="special-whole-grain"
                                    className="product-image" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="col-33-point-3333-percent">
                            <div className="product-card-1">
                                <img src={ ImageMalagkit } 
                                    alt="malagkit"
                                    className="product-image" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>
                
            </main>
        );
    }
}