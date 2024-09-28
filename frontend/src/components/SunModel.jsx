import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SunModel = ({ scene }) => {
  const sunRef = useRef();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    
    // Load sun texture (albedo/diffuse map)
    const sunTexture = loader.load('/sun.jpg'); // Path to your sun texture
    

    // Create the Sun mesh with texture and lighting interaction
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
        map: sunTexture, // Apply the texture
        emissive: 0xffaa00, // Emissive color
        emissiveIntensity: 0.1, // Adjust emissive intensity for glow effect
        shininess: 10, // Add some specular highlights for a shiny effect
    });

    const sun = new THREE.Mesh(geometry, material);

    // Create a PointLight at the center of the sun to simulate light emission
    const sunLight = new THREE.PointLight(0xffffaa, 2, 100);
    sunLight.position.set(0, 0, 0);

    sun.add(sunLight); // Add light to the sun mesh

    scene.add(sun);
    sunRef.current = sun;

    return () => {
      scene.remove(sun);
    };
  }, [scene]);

  return null;
};

export default SunModel;
