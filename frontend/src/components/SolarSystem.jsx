import { useEffect, useRef, useState } from "react";
import * as Spacekit from "spacekit.js";
import "../static/SolarSystem.css";
import * as dat from "dat.gui";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";


const SolarSystem = () => {
    const vizRef = useRef(null); // Create a ref to store the simulation instance
    const [timeSpeed, setTimeSpeed] = useState(10); // State for controlling time speed
    const [isPaused, setIsPaused] = useState(false); // Control pause/play
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [selectedMoon, setSelectedMoon] = useState(null);
    const guiContainerRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        if (!vizRef.current) {
            const viz = new Spacekit.Simulation(document.getElementById("main-container"), {
                basePath: "https://typpo.github.io/spacekit/src",
                unitsPerAu: 100.0,
                jdPerSecond: timeSpeed,
                startPaused: isPaused,
                enableMouse: true,
                enableKeyboard: true,
                camera: {
                    initialPosition: [0, -30, 10],
                    enableDrift: false,
                },
            });

            // Create stars and sun
            viz.createStars();
            const sun = viz.createSphere("sun", {
                textureUrl: "/textures/sun.jpg",
                radius: 0.069634, // Sun's radius scaled down
                position: [0, 0, 0], // Set the Sun at the center of the solar system
                rotation: { enable: true, speed: 0.2 }, // Sun's rotation
            });
            const SUN_POS = [0, 0, 0];
            viz.createLight(SUN_POS);
            const moonData = [
                {
                    name: "moon",
                    textureUrl: "/textures/moon.jpg", // Add texture for the moon
                    labelText: "Moon",
                    radius: 0.001737, // Moon's radius scaled relative to Earth's (approximately 1/4 of Earth's)
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458621.5,
                            a: 0.1,
                            e: 4.582543645168888e-2,
                            i: 5.102060246928811,
                            om: 1.085916732144811e2,
                            w: 6.180561793729225e1,
                            ma: 5.053270083636792e1, // Epoch
                        },
                        "deg"
                    ), // Preset for moon's orbital elements
                    particleSize: 10, // Customize particle size to make it more visible
                },
            ];
            const planetData = [
                {
                    name: "mercury",
                    textureUrl: "/textures/mercury.jpg",
                    labelText: "Mercury",
                    radius: 0.0024397,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 3.870968969437096e-1,
                            e: 2.056515875393916e-1,
                            i: 7.003891682749818,
                            om: 4.830774804443502e1,
                            w: 2.917940253442659e1,
                            ma: 2.56190975209273e2,
                        },
                        "deg"
                    ),
                },
                {
                    name: "venus",
                    textureUrl: "/textures/venus.jpg",
                    labelText: "Venus",
                    radius: 0.0060518,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 7.233458663591554e-1,
                            e: 6.762510759617694e-3,
                            i: 3.394567787211735,
                            om: 7.662534150657346e1,
                            w: 5.474567447560867e1,
                            ma: 2.756687596099721e2,
                        },
                        "deg"
                    ),
                },
                {
                    name: "earth",
                    textureUrl: "/textures/earth.jpg",
                    labelText: "Earth",
                    radius: 0.006371,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2451545.0,
                            a: 1.00000261,
                            e: 0.01671123,
                            i: -0.00001531,
                            om: 0.0,
                            wBar: 102.93768193,
                            L: 100.46457166,
                        },
                        "deg"
                    ),
                    moons: [
                        {
                            name: "moon",
                            textureUrl: "/textures/moon.jpg", // Add texture for the moon
                            labelText: "Moon",
                            radius: 0.001737, // Moon's radius scaled relative to Earth's (approximately 1/4 of Earth's)
                            ephem: new Spacekit.Ephem(
                                {
                                    epoch: 2458621.5,
                                    a: 0.1,
                                    e: 4.582543645168888e-2,
                                    i: 5.102060246928811,
                                    om: 1.085916732144811e2,
                                    w: 6.180561793729225e1,
                                    ma: 5.053270083636792e1, // Epoch
                                },
                                "deg"
                            ), // Preset for moon's orbital elements
                            particleSize: 10, // Customize particle size to make it more visible
                        },
                    ],
                },
                {
                    name: "mars",
                    textureUrl: "/textures/mars.jpg",
                    labelText: "Mars",
                    radius: 0.0033895,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 1.52371401537107,
                            e: 9.336741335309606e-2,
                            i: 1.848141099825311,
                            om: 4.950420572080223e1,
                            w: 2.866965847685386e2,
                            ma: 2.538237617924876e1,
                        },
                        "deg"
                    ),
                },
                {
                    name: "jupiter",
                    textureUrl: "/textures/jupiter.jpg",
                    labelText: "Jupiter",
                    radius: 0.069911,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 5.20180355911023,
                            e: 4.89912558249006e-2,
                            i: 1.303560894624275,
                            om: 1.005203828847816e2,
                            w: 2.73736301845404e2,
                            ma: 2.31939544389401e2,
                        },
                        "deg"
                    ),
                },
                {
                    name: "saturn",
                    textureUrl: "/textures/saturn.jpg",
                    labelText: "Saturn",
                    radius: 0.058232,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 9.577177295536776,
                            e: 5.101889921719987e-2,
                            i: 2.482782449972317,
                            om: 1.136154964073247e2,
                            w: 3.394422648650336e2,
                            ma: 1.870970898012944e2,
                        },
                        "deg"
                    ),
                    rings: true,
                },
                {
                    name: "uranus",
                    textureUrl: "/textures/uranus.jpg",
                    labelText: "Uranus",
                    radius: 0.025362,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 1.914496966635462e1,
                            e: 4.832662948112808e-2,
                            i: 7.697511134483724e-1,
                            om: 7.414239045667875e1,
                            w: 9.942704504702185e1,
                            ma: 2.202603033874267e2,
                        },
                        "deg"
                    ),
                },
                {
                    name: "neptune",
                    textureUrl: "/textures/neptune.jpg",
                    labelText: "Neptune",
                    radius: 0.024622,
                    ephem: new Spacekit.Ephem(
                        {
                            epoch: 2458426.5,
                            a: 3.00962226342805e1,
                            e: 7.36257118719377e-3,
                            i: 1.774569249829094,
                            om: 1.318695882492132e2,
                            w: 2.586226409499831e2,
                            ma: 3.152804988924479e2,
                        },
                        "deg"
                    ),
                },
            ];

            const planets = [];
            const Moons = [];
            planetData.forEach(({ name, textureUrl, labelText, radius, ephem, moons, rings }) => {
                const planet = viz.createSphere(name, {
                    textureUrl,
                    radius,
                    ephem,
                    labelText, // Assign label to each planet
                    rotation: { enable: true, speed: 0.2 },
                });

                // Add moons for planets like Earth
                if (moons) {
                    moonData.forEach(({ name, textureUrl, labelText, radius, ephem, particleSize }) => {
                        const moon = viz.createSphere(name, {
                            textureUrl,
                            labelText,
                            radius,
                            ephem,
                            particleSize,
                        });
                        moon.orbitAround(planet); // Make the moon orbit the planet
                        Moons.push(moon);
                    });
                }

                if (rings) {
                    const currentJD = viz.getJd();
                    const pos = planet.getPosition(currentJD);
                    viz.createLight(pos);
                    planet.addRings(12427000.580913, 28047800.924731, "../textures/saturn_rings_top.png");
                }

                planets.push(planet); // Store planet instances
            });

            // Store the simulation instance in the ref
            vizRef.current = viz;

            // Initialize dat.GUI
            const gui = new dat.GUI({ autoPlace: false }); // Disable automatic placement

            // Create a sidebar element
            const guiContainer = document.createElement("div");
            guiContainer.classList.add("sidebar");
            guiContainer.style.position = "absolute";
            guiContainer.style.top = "60px"; // Adjust this to match your navbar height
            guiContainer.style.right = "12px";
            guiContainer.style.height = "calc(100% - 60px)"; // Full height minus navbar
            guiContainer.style.width = "130px"; // Width of the sidebar
            guiContainer.style.zIndex = "100"; // Ensure it's on top
            guiContainer.style.display = isSidebarVisible ? "block" : "none";
            

            // Append the GUI to the sidebar
            guiContainer.appendChild(gui.domElement);
            document.body.appendChild(guiContainer);
            guiContainerRef.current = guiContainer;

            const planetFolder = gui.addFolder("Planets");
            const planetStates = {}; // Object to hold planet states

            planetData.forEach((planet) => {
                planetStates[planet.name] = false; // Initialize all planets as unchecked
            });

            planetData.forEach((planet, index) => {
                planetFolder
                .add(planetStates, planet.name)
                .name(planet.name)
                .onChange((value) => {
                    if (value) {
                        // Deselect all planets and moons when a new planet is selected
                        Object.keys(planetStates).forEach((p) => (planetStates[p] = false));
                        Object.keys(moonStates).forEach((m) => (moonStates[m] = false));

                        // Only set the current planet to true
                        planetStates[planet.name] = true;
                        setSelectedPlanet(planet.name);
                        setSelectedMoon(null); // Reset moon selection

                        // Move the camera to the selected planet with a smooth zoom effect
                        const viewer = viz.getViewer();
                        const camera = viz.getViewer().camera;
                        const currentJD = viz.getJd();
                        const planetObject = planets[index];
                        const pos = planetObject.getPosition(currentJD);
                        const zoomFactor = 0.0005;

                        if (pos) {
                            // Smooth camera zoom to planet's position using GSAP
                            gsap.to(camera.position, {
                                x: pos[0] * zoomFactor,
                                y: pos[1] * zoomFactor,
                                z: pos[2] * zoomFactor,
                                duration: 2, // Duration of the zoom effect in seconds
                                ease: "power2.out", // Ease-out effect for smooth animation
                                onUpdate: () => {
                                    // Continue following the planet during the animation
                                    viewer.followObject(planetObject, [camera.position.x, camera.position.y, camera.position.z]);
                                },
                            });
                        }
                    } else {
                        // If unchecked, reset camera to sun with a smooth transition
                        setSelectedPlanet(null);
                        gsap.to(camera.position, {
                            x: 0,
                            y: 5,
                            z: 10,
                            duration: 2, // Smooth transition back to the Sun
                            ease: "power2.out",
                            onUpdate: () => {
                                viewer.followObject(sun, [0, -10, 5]);
                            },
                        });
                    }

                    // Update GUI to reflect the current state of all checkboxes
                    planetFolder.updateDisplay();
                    moonFolder.updateDisplay();
                });
            });

            planetFolder.open();

            // Moons logic
            const moonFolder = gui.addFolder("Moons");
            const moonStates = {};

            moonData.forEach((moon) => {
                moonStates[moon.name] = false;
            });

            moonData.forEach((moon, index) => {
                moonFolder
                .add(moonStates, moon.name)
                .name(moon.labelText)
                .onChange((value) => {
                    if (value) {
                        // Deselect all moons and planets when a new moon is selected
                        Object.keys(planetStates).forEach((p) => (planetStates[p] = false));
                        Object.keys(moonStates).forEach((m) => (moonStates[m] = false));

                        // Only set the current moon to true
                        moonStates[moon.name] = true;
                        setSelectedPlanet(null);
                        setSelectedMoon(moon.name);

                        // Move the camera to the selected moon with a smooth zoom effect
                        const viewer = viz.getViewer();
                        const camera = viewer.camera;
                        const currentJD = viz.getJd();
                        const moonObject = Moons[index];
                        const pos = moonObject.getPosition(currentJD);
                        const zoomFactor = 0.0005; // Retrieve zoom factor for the moon

                        if (pos) {
                            gsap.to(camera.position, {
                                x: pos[0] * zoomFactor,
                                y: (pos[1] + 0.5) * zoomFactor,
                                z: pos[2] * zoomFactor,
                                duration: 2, // Duration of the zoom effect
                                ease: "power2.out", // Smooth animation
                                onUpdate: () => {
                                    viewer.followObject(moonObject, [camera.position.x, camera.position.y, camera.position.z]);
                                },
                            });
                        }
                    } else {
                        // Reset camera to sun with a smooth transition
                        setSelectedMoon(null);
                        gsap.to(camera.position, {
                            x: 0,
                            y: 5,
                            z: 10,
                            duration: 2,
                            ease: "power2.out",
                            onUpdate: () => {
                                viewer.followObject(sun, [0, -10, 5]);
                            },
                        });
                    }

                    // Update GUI to reflect the current state of all checkboxes
                    planetFolder.updateDisplay();
                    moonFolder.updateDisplay();
                });
            });

            moonFolder.open();

            gui.open(); // Open the GUI
            return()=>{
                document.body.style.overflow = "auto";

            }
        }
    }, [timeSpeed, isPaused, selectedPlanet, isSidebarVisible, selectedMoon]); // Dependencies include cameraPos

    useEffect(() => {
        if (guiContainerRef.current) {
            guiContainerRef.current.style.display = isSidebarVisible ? "block" : "none"; // Toggle sidebar visibility
        }
    }, [isSidebarVisible]);

    // Handle time speed and pause logic
    useEffect(() => {
        if (vizRef.current) {
            const simulation = vizRef.current;

            // Set the JD (Julian Date) progression speed
            simulation.setJdPerSecond(timeSpeed); // Controls time speed multiplier

            if (isPaused) {
                simulation.stop(); // Pauses the simulation
            } else {
                simulation.start(); // Resumes the simulation
            }
        }
    }, [timeSpeed, isPaused]);

    return (
        <div className="solar-system-container" style={{ width: "100vw", height: "100vh", overflow: "hidden"}}>
            <button
                className="toggle-sidebar-btn"
                onClick={() => setSidebarVisible(!isSidebarVisible)}
                style={{ marginTop: "20px", position: "absolute", top: "40px", right: "10px", zIndex: "101" }}
            >
                {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
            </button>
            <div id="main-container"></div>
            <div className="time-control">
                <label htmlFor="timeSpeed">Time Speed: </label>
                <input id="timeSpeed" type="range" min="1" max="10" step="1" value={timeSpeed} onChange={(e) => setTimeSpeed(Number(e.target.value))} />
                <span>{timeSpeed}x</span>
                <button onClick={() => setIsPaused(!isPaused)} style={{ marginLeft: "5px" }}>
                    {isPaused ? "Resume" : "Pause"}
                </button>
            </div>
        </div>
    );
};

export default SolarSystem;
