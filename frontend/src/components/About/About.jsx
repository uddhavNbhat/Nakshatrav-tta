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
        const viz_five = new Spacekit.Simulation(document.getElementById('card-five'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });
        const viz_six = new Spacekit.Simulation(document.getElementById('card-six'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });
        const viz_seven = new Spacekit.Simulation(document.getElementById('card-seven'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });
        const viz_eight = new Spacekit.Simulation(document.getElementById('card-eight'), {
            basePath: 'https://typpo.github.io/spacekit/src',
        });

        // Create spheres for each planet
        viz_four.createSphere('mars', {
            textureUrl: '../textures/mars.jpg', // Adjust path as needed
        });
        
        const saturn = viz_six.createSphere('saturn', {
            textureUrl: '../textures/saturn.jpg', // Adjust path as needed
        });
        saturn.addRings(184270000.580913, 380478000.924731, "../textures/saturn_rings_top.png"); // Adjust path as needed
        
        viz_seven.createSphere('uranus', {
            textureUrl: '../textures/uranus.jpg', // Adjust path as needed
        });

        viz_five.createSphere('jupiter', {
            textureUrl: '../textures/jupiter.jpg', // Adjust path as needed
        });
        viz_one.createSphere('mercury', {
            textureUrl: '../textures/mercury.jpg', // Adjust path as needed
        });
        viz_two.createSphere('venus', {
            textureUrl: '../textures/venus.jpg', // Adjust path as needed
        });
        viz_three.createSphere('earth', {
            textureUrl: '../textures/earth.jpg', // Adjust path as needed
        });
        viz_eight.createSphere('neptune', {
            textureUrl: '../textures/neptune.jpg', // Adjust path as needed
        });

    }, []); // Empty dependency array to run only once

    return (
        <div>
            <h2 className="card-header">Our Planets</h2>
            <div className='card_container'>

                <div className="card">
                    <div id="card-one" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Mercury</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-two" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Venus</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-three" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Earth</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-four" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Mars</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-five" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Jupiter</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-six" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Saturn</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-seven" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Uranus</h3>
                    </div>
                </div>

                <div className="card">
                    <div id="card-eight" style={{ width: '600px', height: '300px' }}></div>
                    <div className="card-body">
                        <h3 className="card-title" style={{color:"white"}}>Neptune</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
