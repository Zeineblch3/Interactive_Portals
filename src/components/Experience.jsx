import { Environment, CameraControls, useCursor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Make sure THREE is imported
import Portal from "./Portal"; 
import Tree from "./Tree"; 
import Shellfish from "./Shellfish";
import Flower from "./Flower";
import Ruin from "./Ruin";
import Rock from "./Rock";

export const Experience = ({ setIsInPortal }) => {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [entered, setEntered] = useState(false); // Track if inside a portal
  const controlsRef = useRef();
  useCursor(hovered);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active) {
      setIsInPortal(true); // Hide Navbar when entering a portal
      setEntered(true); // Mark as entered so Scene loads

      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      
      controlsRef.current.setLookAt(
        0, 0, 5, 
        targetPosition.x, targetPosition.y, targetPosition.z, 
        true
      );
    } else {
      setIsInPortal(false); // Show Navbar when exiting a portal
      setEntered(false); // Reset scene appearance
      controlsRef.current.setLookAt(0, 0, 10, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <CameraControls ref={controlsRef} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 6} />

      {/* Sahara Portal */}
      <Portal 
        texture="textures/sahara.jpg" 
        name="Sahara" 
        color="#e09758" 
        active={active} 
        setActive={setActive} 
        hovered={hovered} 
        setHovered={setHovered}
      >
        {/* Pass 'entered' state to Tree to control its fade */}
        <Tree scale={1} position={[0, 0.1, 0]} hovered={hovered === "Tree"} entered={entered} />

        {/* Scene will only appear inside the portal when entered */}
        {entered && <Ruin scale={1} position={[-0.1, -0.9, -5]} />}
        {entered && <Rock scale={3} position={[0, 0, -2]} />}
      </Portal>

      {/* Sahel Portal */}
      <Portal 
        texture="textures/sahel.jpg" 
        name="Sahel" 
        color="#e2f0f7" 
        position={[3, 0, 0]}  
        rotation={[0, Math.PI / 8, 0]}  
        active={active} 
        setActive={setActive} 
        hovered={hovered} 
        setHovered={setHovered}
      >
        <Shellfish scale={9} position={[0, 0, 0]} hovered={hovered === "Shellfish"} entered={entered}/>
      </Portal>

      {/* Cap Bon Portal */}
      <Portal 
        texture="textures/capbon.jpg" 
        name="Cap Bon" 
        color="#e4c04a" 
        position={[-3, 0, 0]}  
        rotation={[0, -Math.PI / 8, 0]}  
        active={active} 
        setActive={setActive} 
        hovered={hovered} 
        setHovered={setHovered}
      >
        <Flower scale={0.4} position={[0, 0.1, 0]} hovered={hovered === "Flower"} entered={entered}/>
      </Portal>
    </>
  );
};
