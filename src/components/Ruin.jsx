import React from 'react';
import { useGLTF } from '@react-three/drei';

const Ruin = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/ruin/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/ruin/scene.gltf');

export default Ruin;
