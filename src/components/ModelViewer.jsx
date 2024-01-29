// ? three vanilla
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ModelViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const CurrentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const light = new THREE.PointLight(0xFFFFFF);
    light.position.set(5, 5, 5);
    scene.add(light);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhongMaterial({ color: 0x00ff00, flatShading: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    CurrentMount.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      CurrentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};
