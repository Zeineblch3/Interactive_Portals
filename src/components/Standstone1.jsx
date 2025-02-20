import React from 'react';
import { useGLTF } from '@react-three/drei';

const Standstone1 = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/standstone1/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/standstone1/scene.gltf');

export default Standstone1;
