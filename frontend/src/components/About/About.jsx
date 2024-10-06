import { useEffect } from "react";
import * as Spacekit from "spacekit.js";
import "./About.css";

const About = () => {
    useEffect(() => {
        // Initialize Spacekit simulations
        const viz_one = new Spacekit.Simulation(document.getElementById('card-one'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });
        const viz_two = new Spacekit.Simulation(document.getElementById('card-two'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });
        const viz_three = new Spacekit.Simulation(document.getElementById('card-three'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });
        const viz_four = new Spacekit.Simulation(document.getElementById('card-four'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });

        // Create spheres for each planet
        viz_one.createSphere('mars', {
            textureUrl: '../textures/mars.jpg', // Adjust path as needed
        });
        
        const saturn = viz_two.createSphere('saturn', {
            textureUrl: '../textures/saturn.jpg', // Adjust path as needed
        });
        saturn.addRings(184270000.580913, 380478000.924731, "../textures/saturn_rings_top.png"); // Adjust path as needed
        
        viz_three.createSphere('uranus', {
            textureUrl: '../textures/uranus.jpg', // Adjust path as needed
        });

        viz_four.createSphere('jupiter', {
            textureUrl: '../textures/jupiter.jpg', // Adjust path as needed
        });

    }, []); // Empty dependency array to run only once

    return (
        <div>
            <h2>Popular Celestial Bodies</h2>
            <div className='card_container'>

                <div className="card">
                    <div id="card-one" style={{ width: '600px', height: '200px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title">Mars</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-two" style={{ width: '600px', height: '200px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title">Saturn</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-three" style={{ width: '600px', height: '200px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title">Uranus</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-four" style={{ width: '600px', height: '200px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title">Jupiter</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
