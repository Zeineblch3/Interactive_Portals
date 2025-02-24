import React from 'react';
import { useGLTF } from '@react-three/drei';

const Shell = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/shells/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/shells/scene.gltf');

export default Shell;
