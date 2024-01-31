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

    camera.position.z = 100;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight);

    // responsive
    const resize =  () => {
      renderer.setSize(window.innerWidth * 0.5 , window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', resize);

    const directionLigth = new THREE.DirectionalLight(0xfefefe);
    directionLigth.position.set(0, 2, 0);
    directionLigth.intensity = 3;
    scene.add(directionLigth);

    const directionLigthColor = new THREE.AmbientLight(0x86B6F6, 0.5);
    directionLigth.position.set(0, 1, 0);
    scene.add(directionLigthColor);

    // model
    const loader = new GLTFLoader();
    loader.load("/brain/scene.gltf", (gltf) => {
      const model = gltf.scene;
      model.position.y = -18;
      model.scale.set(0.5, 0.3, 0.4);
      model.name = 'model'

      // shadows
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
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
      controls.update(); // updating controls in motion
      const model = scene.getObjectByName('model');
      if (model) {
      model.rotation.y -= 0.005;
}
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      CurrentMount.removeChild(renderer.domElement);
      // deleting resize
      window.removeEventListener('resize', resize);
      // cleaning resources
      scene.traverse((obj) => {
        if(obj.isMesh){
          obj.geometry.dispose();
          obj.material.dispose();
        }
      });
    };
  }, []);

  return <div className="form-canvas" ref={mountRef} />;
};