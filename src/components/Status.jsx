import React from 'react';
import { useGLTF } from '@react-three/drei';

const Status = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/status/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/status/scene.gltf');

export default Status;
