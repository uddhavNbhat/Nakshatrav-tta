import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div>
            <h2>Popular celestial bodies</h2>
            <div className='card_container'>

                <div className="card">
                    <img src="holder.js/100px180" alt="Mars" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Mars</h3>
                    </div>
                </div>

                <div className="card">
                    <img src="holder.js/100px180" alt="Saturn" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Saturn</h3>
                    </div>
                </div>

                <div className="card">
                    <img src="holder.js/100px180" alt="Uranus" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Uranus</h3>
                    </div>
                </div>

                <div className="card">
                    <img src="holder.js/100px180" alt="Jupiter" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">Jupiter</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
