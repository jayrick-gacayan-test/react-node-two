import React from 'react';

/* Components */
import Card from '../layouts/Card.js';

const arrayMission = [
    "Providing quality rice for all.",
    "Righteous pricing.",
    "Promoting farmer's products.",
    "Treating consumers an excellent quality-service.",
    "Offering varieties of mix-free rice grains.",
    "Ensuring the rice quality." ];

const AboutUsPage = () => {
    return (
        <main className="container-fluid background-color-white">
            <section className="container section-1 text-center">
                <h1>About us Page</h1>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <hr/>
            </section>
            <section className="container section-1 text-center">
                <h1>Mission</h1>
                
                <div className="row mb-3">
                    <div className="col-33-point-3333-percent">
                        <Card>
                            <p className="lead">
                                Providing quality rice for all.
                            </p>
                        </Card>
                    </div>
                    <div className="col-33-point-3333-percent">
                        <Card>
                            <p className="lead">
                                Righteous pricing.
                            </p>
                        </Card>
                    </div>
                    <div className="col-33-point-3333-percent">
                        <Card>
                            <p className="lead">
                                Promoting farmer's products.
                            </p>
                        </Card>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-33-point-3333-percent">
                        <Card>
                            <p className="lead">
                                Treating consumers an excellent quality-service.
                            </p>
                        </Card>
                    </div>
                    <div className="col-33-point-3333-percent">
                        <Card>
                            <p className="lead">
                                Offering varieties of mix-free rice grains.
                            </p>
                        </Card>
                    </div>
                    <div className="col-33-point-3333-percent">
                        <Card>
                            <p className="lead">
                                Ensuring the rice quality.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default AboutUsPage;