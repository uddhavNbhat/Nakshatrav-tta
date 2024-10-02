import { useEffect, useRef, useState } from 'react';
import * as Spacekit from 'spacekit.js';
import '../static/SolarSystem.css';
import * as dat from 'dat.gui';

const SolarSystem = () => {
  const vizRef = useRef(null); // Create a ref to store the simulation instance
  const [timeSpeed, setTimeSpeed] = useState(10); // State for controlling time speed
  const [isPaused, setIsPaused] = useState(false); // Control pause/play
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    if (!vizRef.current) {
      const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
        basePath: 'https://typpo.github.io/spacekit/src',
        jdPerSecond: timeSpeed,
        startPaused: isPaused,
        enableMouse: true,
        enableKeyboard: true,
        camera: {
          initialPosition: [0, -10, 5],
          enableDrift: false,
        },
      });

      // Create stars and sun
      viz.createStars();
      const sun = viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
      const SUN_POS = [0, 0, 0];
      viz.createLight(SUN_POS);

      const planetData = [
        { name: 'mercury', textureUrl: '/textures/mercury.jpg', radius: 0.0384, ephem: Spacekit.EphemPresets.MERCURY, atmosColour: '#d0d0d0', },
        { name: 'venus', textureUrl: '/textures/venus.jpg', radius: 0.0957, ephem: Spacekit.EphemPresets.VENUS, atmosColour: 0xc7c1a8, },
        { name: 'earth', textureUrl: '/textures/earth.jpg', radius: 0.1, ephem: Spacekit.EphemPresets.EARTH, atmosColour: 0xc7c1a8, },
        { name: 'mars', textureUrl: '/textures/mars.jpg', radius: 0.0531, ephem: Spacekit.EphemPresets.MARS, atmosColour: 0xc7c1a8, },
        { name: 'jupiter', textureUrl: '/textures/jupiter.jpg', radius: 0.1, ephem: Spacekit.EphemPresets.JUPITER, atmosColour: 0xc7c1a8, },
        { name: 'saturn', textureUrl: '/textures/saturn.jpg', radius: 0.083, ephem: Spacekit.EphemPresets.SATURN, atmosColour: 0xc7c1a8, },
        { name: 'uranus', textureUrl: '/textures/uranus.jpg', radius: 0.0364, ephem: Spacekit.EphemPresets.URANUS, atmosColour: 0xc7c1a8, },
        { name: 'neptune', textureUrl: '/textures/neptune.jpg', radius: 0.0353, ephem: Spacekit.EphemPresets.NEPTUNE, atmosColour: 0xc7c1a8, },
      ];

      const planets = [];
      planetData.forEach(({ name, textureUrl, radius, ephem, atmosColour }) => {
        const planet = viz.createSphere(name, {
          textureUrl,
          radius,
          ephem,
          rotation: { enable: true, speed: 0.2 },
          atmosphere: {enable: true, color: atmosColour,}
        });
        planets.push(planet); // Store planet instances
      });

      // Store the simulation instance in the ref
      vizRef.current = viz;

      // Initialize dat.GUI
      const gui = new dat.GUI();

      // Wrap each planet in the GUI to trigger zoom and display name
      planetData.forEach((planet, index) => {
        gui.add({ [planet.name]: false }, planet.name)
          .name(planet.name)
          .onChange((value) => {
            const viewer = viz.getViewer();
            const camera = viz.getViewer().camera;
            if (value) {
              // If a planet is selected, set the selected planet state
              setSelectedPlanet(planet.name);
              
              // Get the current JD from the simulation
              const currentJD = viz.getJd(); // Retrieve the current Julian Date
              
              // Get the planet object directly
              const planetObject = planets[index];
      
              // Use the getPosition method with the current JD
              const pos = planetObject.getPosition(currentJD); // Pass the current JD
      
              if (pos) {
                camera.position.set(pos[0], pos[1]+0.5, pos[2]);
                viewer.followObject(planetObject,[pos[0], pos[1]+0.5, pos[2]]);
                // Optionally, log the position to verify
                console.log(`Camera moved to: x=${pos[0]}, y=${pos[1]}, z=${pos[2]}`);
              } else {
                console.error(`Position for ${planet.name} is undefined.`);
              }
            } else {
              // If this button was unchecked, make sure to clear the selection
                setSelectedPlanet(null);
                camera.position.set(0, 5, 10); // Move the camera back to the sun's position
                viewer.followObject(sun,[0, -10, 5]);
                console.log(`Camera moved back to the sun: x=0, y=0, z=0`);
            }
          });
      });
      
      gui.open(); // Open the GUI
      gui.domElement.style.position = 'absolute'; // Position the GUI
      gui.domElement.style.top = '60px'; // Adjust based on your navbar height
      gui.domElement.style.left = '20px'; // Optional: adjust for horizontal positioning
    }
  }, [timeSpeed, isPaused,selectedPlanet]); // Dependencies include cameraPos

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
    <div>
      <div id="main-container"></div>
      <div className="time-control">
        <label htmlFor="timeSpeed">Time Speed: </label>
        <input
          id="timeSpeed"
          type="range"
          min="1"
          max="10"
          step="1"
          value={timeSpeed}
          onChange={(e) => setTimeSpeed(Number(e.target.value))}
        />
        <span>{timeSpeed}x</span>
        <button onClick={() => setIsPaused(!isPaused)} style={{ marginLeft: "5px" }}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  );
};

export default SolarSystem;
