import React from 'react';
import { useGLTF } from '@react-three/drei';

const Star_war = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/star_war/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/star_war/scene.gltf');

export default Star_war;
