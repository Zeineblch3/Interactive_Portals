import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

const Shellfish = ({ entered, ...props }) => {
  const { scene } = useGLTF('/models/shellfish.glb');
  const treeRef = useRef(); // Reference to the model
  const [opacity, setOpacity] = useState(1); // Initial opacity is 1 (fully visible)

  useEffect(() => {
    // Smooth transition for opacity based on 'entered' state
    if (entered) {
      setOpacity(0); // Set opacity to 0 when entering the portal
    } else {
      setOpacity(1); // Set opacity back to 1 when exiting the portal
    }
  }, [entered]);

  useEffect(() => {
    if (treeRef.current) {
      treeRef.current.traverse((child) => {
        if (child.material) {
          child.material.opacity = opacity;
          child.material.transparent = true;
        }
      });
    }
  }, [opacity]);

  return <primitive ref={treeRef} object={scene} {...props} />;
};

// Preload the GLTF model
useGLTF.preload('/models/shellfish .glb');

export default Shellfish;
