import { useEffect, useRef } from 'react';
import * as Spacekit from 'spacekit.js';
import '../static/SolarSystem.css';

const SolarSystem = () => {
  const vizRef = useRef(null); // Create a ref to store the simulation instance

  useEffect(() => {
    if (!vizRef.current) {
      const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
        basePath: 'https://typpo.github.io/spacekit/src',
      });
      
      // Create a background using Yale Bright Star Catalog data.
      viz.createStars();
      
      // Create our first object - the sun - using a preset space object.
      viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

      const SUN_POS = [0, 0, 0];
      viz.createLight(SUN_POS);
      
      // Then add some planets
      viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
      viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
      viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
      viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
      const jupiter = viz.createSphere('jupiter2', {
        textureUrl: '/textures/jupiter.jpg',
        radius: 0.1, 
        ephem: Spacekit.EphemPresets.JUPITER,
        levelsOfDetail: [
          { radii: 0, segments: 64 },
          { radii: 30, segments: 16 },
          { radii: 60, segments: 8 },
        ],
        atmosphere: {
          enable: true,
          color: 0xc7c1a8,
        },
        rotation: {
          enable: true,
          speed: 2,
        },
      });      
      viz.getViewer().followObject(jupiter, [-0.75, -0.75, 0.5]);
      viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
      viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
      viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);
      
      // Add Tesla Roadster
      viz.createObject('spaceman', {
        labelText: 'Tesla Roadster',
        ephem: new Spacekit.Ephem({
          // These parameters define orbit shape.
          a: 1.324870564730606E+00,
          e: 2.557785995665682E-01,
          i: 1.077550722804860E+00,
          
          // These parameters define the orientation of the orbit.
          om: 3.170946964325638E+02,
          w: 1.774865822248395E+02,
          ma: 1.764302192487955E+02,
          
          // Where the object is in its orbit.
          epoch: 2458426.500000000,
        }, 'deg'),
      });

      vizRef.current = viz; // Store the simulation instance in the ref
    }

  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div id="main-container"></div>
  );
};

export default SolarSystem;