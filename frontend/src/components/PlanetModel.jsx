import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const PlanetModel = ({ size, color, position, scene }) => {
  const planetRef = useRef();

  useEffect(() => {
    // Create the Planet mesh
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color });
    const planet = new THREE.Mesh(geometry, material);

    // Set the position and add to the scene
    planet.position.set(position.x, position.y, position.z);
    scene.add(planet);
    planetRef.current = planet;

    return () => {
      // Clean up: remove the planet from the scene
      scene.remove(planet);
    };
  }, [size, color, position, scene]);

  return null; // No JSX here either since we're interacting with the scene directly
};

export default PlanetModel;
