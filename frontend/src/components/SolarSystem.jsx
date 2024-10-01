import { useEffect, useRef } from 'react';
import * as Spacekit from 'spacekit.js';
import * as THREE from 'three'; // Importing Three.js
import '../static/SolarSystem.css';

const SolarSystem = () => {
  const vizRef = useRef(null); // Create a ref to store the simulation instance
  const sceneRef = useRef(null); // Create a ref to store the Three.js scene

  useEffect(() => {
    if (!vizRef.current) {
      const viz = new Spacekit.Simulation(document.getElementById('main-container'), {
        basePath: 'https://typpo.github.io/spacekit/src',
      });
      
      // Create a background using Yale Bright Star Catalog data.
      viz.createStars();

      // Setup Three.js scene for custom planet objects
      const scene = viz.getScene(); // Get the underlying Three.js scene used by Spacekit
      sceneRef.current = scene;

      const sunTexture = new THREE.TextureLoader().load('/textures/sun.jpg');
      const planetTextureEarth = new THREE.TextureLoader().load('/textures/sun.jpg');
      const planetTextureMars = new THREE.TextureLoader().load('/textures/sun.jpg');
      // Load more textures for other planets

      // Helper function to create a planet
      const createPlanet = (radius, texture, position) => {
        const geometry = new THREE.SphereGeometry(radius, 64, 64); // 64 segments for high resolution sphere
        const material = new THREE.MeshStandardMaterial({
          map: texture,
        });
        const planet = new THREE.Mesh(geometry, material);
        planet.position.set(position.x, position.y, position.z);
        scene.add(planet); // Add planet to the Three.js scene
        return planet;
      };

      // Sun
      createPlanet(696340 * 0.00001, sunTexture, { x: 0, y: 0, z: 0 });

      // Earth
      createPlanet(696340 * 0.00001, planetTextureEarth, { x: 15, y: 0, z: 0 }); // Position relative to the Sun

      // Mars
      createPlanet(696340 * 0.00001, planetTextureMars, { x: 35, y: 0, z: 0 });

      // You can add more planets similarly by loading their textures and using createPlanet function.

      const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1, 0);
      pointLight.position.set(8, 8, 8); // Position at the Sun
      pointLight.position.set(18, 18, 18);
      scene.add(pointLight);

      // Store the simulation instance in the ref
      vizRef.current = viz;
    }
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div id="main-container"></div>
  );
};

export default SolarSystem;
