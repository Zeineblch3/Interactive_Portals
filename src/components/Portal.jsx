import { RoundedBox, MeshPortalMaterial, useTexture, Text, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Portal = ({ texture, name, color, active, setActive, setHovered, children, position = [0, 0, 0] }) => {  // Add position prop here
    const map = useTexture(texture);
    const portalMaterial = useRef();
    const audioRef = useRef(new Audio("/audio/magic-smite-6012_soNDHGLI.mp3"));
  
    useFrame((_state, delta) => {
      const worldOpen = active === name;
      easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    });
  
    return (
      <group position={position}> {/* Apply position to group */}
        <Text font="fonts/Caprasimo-Regular.ttf" fontSize={0.3} position={[0, -1.3, 0.051]} anchorY="bottom">
          {name}
          <meshBasicMaterial color={color} toneMapped={false} />
        </Text>
  
        <RoundedBox
          name={name}
          args={[2, 3, 0.1]}
          onDoubleClick={() => {
            setActive(active === name ? null : name);
            audioRef.current.currentTime = 0; // Restart sound
            audioRef.current.play();
          }}
          onPointerEnter={() => setHovered(name)}
          onPointerLeave={() => setHovered(null)}
        >
          <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
            <ambientLight intensity={1} />
            <Environment preset="sunset" />
            {children}
            <mesh>
              <sphereGeometry args={[5, 64, 64]} />
              <meshStandardMaterial map={map} side={THREE.BackSide} />
            </mesh>
          </MeshPortalMaterial>
        </RoundedBox>
      </group>
    );
  };
  
  export default Portal;
  