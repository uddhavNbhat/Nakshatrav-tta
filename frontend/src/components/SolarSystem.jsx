import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SunModel from "./SunModel";
import PlanetModel from "./PlanetModel";

const SolarSystem = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load the starry background texture and apply it to a large sphere
    const loader = new THREE.TextureLoader();
    const starTexture = loader.load('/star.jpg'); // Path to your starry background image
    const starGeometry = new THREE.SphereGeometry(500, 64, 64); // Large sphere
    const starMaterial = new THREE.MeshBasicMaterial({
      map: starTexture,
      side: THREE.BackSide, // Make sure the texture is visible from the inside
    });

    const starSphere = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starSphere);

    // Keep the star sphere always centered at the camera position
    const updateStarSpherePosition = () => {
      starSphere.position.copy(camera.position);
    };

    // Add soft ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Create OrbitControls for camera movement
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.maxDistance = 100;
    controls.minDistance = 2;

    camera.position.set(0, 0, 20); // Initial camera position
    controls.update();

    // Resize canvas on window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Ensure controls are updated each frame

      // Update star sphere position to always follow the camera
      updateStarSpherePosition();

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef}>
      <SunModel scene={sceneRef.current} />
      <PlanetModel
        size={1}
        color={0x0000ff}
        position={{ x: 8, y: 0, z: 0 }}
        scene={sceneRef.current}
      />
      <PlanetModel
        size={0.6}
        color={0xff0000}
        position={{ x: 12, y: 0, z: 0 }}
        scene={sceneRef.current}
      />
    </div>
  );
};

export default SolarSystem;
