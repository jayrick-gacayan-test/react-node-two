import React from 'react';
import ImageFeedback from '../../img_feedback.jpeg';

/* rice images */
    

const HomePage = () => {
    return (
        <main className="container-fluid background-color-white">
            <section className="container section-1">
                <h1 className="text-center">Best of the best</h1>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <hr />
            </section>
            <section id="reaction-image-container" className="container-fluid section-1"
                style={{ backgroundImage : `url(${ ImageFeedback })` }}>
                <div className="row">
                    <div className="col-50-percent">
                        <form id="reaction-form-container" className="container-fluid mt-5">
                            <div className="row mb-3">
                                <div className="col-50-percent">
                                    <input type="text" className="reaction-input" placeholder="Firstname: "/>
                                </div>
                                <div className="col-50-percent">
                                    <input type="text" className="reaction-input" placeholder="Lastname: "/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-50-percent">
                                    <input type="text" className="reaction-input" placeholder="Email: "/>
                                </div>
                                <div className="col-50-percent">
                                    <input type="text" className="reaction-input" placeholder="Contact Number: "/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-100-percent">
                                    <textarea className="reaction-text-area" placeholder="Reaction: ">
                                    </textarea>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-100-percent">
                                    <button className="reaction-button">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-50-percent">
                    </div>
                    
                </div>
            </section>
        </main>
    );
};

export default HomePage;