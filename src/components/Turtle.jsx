import React from 'react';
import { useGLTF } from '@react-three/drei';

const Turtle = (props) => {
  // Load the GLTF model
  const { scene } = useGLTF('/models/turtle/scene.gltf');

  // Return the loaded model
  return <primitive object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/turtle/scene.gltf');

export default Turtle;
