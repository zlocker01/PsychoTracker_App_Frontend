// ? three vanilla
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ... (importaciones)
export const ModelViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const CurrentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 90;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight);
    
    const ambientLight = new THREE.AmbientLight(0xfefefe, 1);
    ambientLight.position.set(1, 1, 2);
    ambientLight.intensity = 1;
    scene.add(ambientLight);

    const directionLigth = new THREE.DirectionalLight(0xfefefe);
    directionLigth.position.set(1, 2, 2);
    directionLigth.intensity = 3;
    scene.add(directionLigth);

    // model
    const loader = new GLTFLoader();
    loader.load("/brain/scene.gltf", (gltf) => {
      const model = gltf.scene;
      model.position.y = -15;
      model.scale.set(0.3, 0.3, 0.3);
      scene.add(model);
    });

    CurrentMount.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualizar controles en cada cuadro
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      CurrentMount.removeChild(renderer.domElement);
      // Limpieza de recursos cuando el componente se desmonta
      scene.dispose();
    };
  }, []);

  return <div className="model" ref={mountRef} />;
};