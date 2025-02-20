import React from 'react';
import { useGLTF } from '@react-three/drei';

const Stone = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/stone/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/stone/scene.gltf');

export default Stone;
