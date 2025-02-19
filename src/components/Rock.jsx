import React from 'react';
import { useGLTF } from '@react-three/drei';

const Rock = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/rock/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/rock/scene.gltf');

export default Rock;
