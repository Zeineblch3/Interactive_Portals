import React from 'react';
import { useGLTF } from '@react-three/drei';

const Boat = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/boat/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/boat/scene.gltf');

export default Boat;
