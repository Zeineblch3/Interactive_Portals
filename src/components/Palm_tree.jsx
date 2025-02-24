import React from 'react';
import { useGLTF } from '@react-three/drei';

const Palm_tree = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/Palm_tree/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/Palm_tree/scene.gltf');

export default Palm_tree;
