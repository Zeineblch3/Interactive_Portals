import React from 'react';
import { useGLTF } from '@react-three/drei';

const Tree = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/shellfish.glb');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/shellfish.glb');

export default Tree;
