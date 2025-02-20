import { RoundedBox, MeshPortalMaterial, useTexture, Text, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Portal = ({ texture, name, color, active, setActive, setHovered, children, position = [0, 0, 0], skyTexture, groundTexture }) => {
    const portalMaterial = useRef();
    const audioRef = useRef(new Audio("/audio/magic-smite-6012_soNDHGLI.mp3"));

    // Load textures for sky and ground
    const skyMap = useTexture(skyTexture);
    const groundMap = useTexture(groundTexture);

    useFrame((_state, delta) => {
        const worldOpen = active === name;
        easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta);
    });

    return (
        <group position={position}>
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

                    {/* Top Half-Sphere (Sky) */}
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[10 /*size of the sphere*/, 64, 64, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
                        <meshStandardMaterial map={skyMap} side={THREE.BackSide} /> {/* Sky texture */}
                    </mesh>

                    {/* Realistic Filled Volume (Ground) */}
                    <mesh position={[0, -1.33, 0]}> {/* Adjust position to anchor at the bottom */}
                        <cylinderGeometry args={[20, 20, 0.801, 64]} /> {/* Cylinder to represent the ground */}
                        <meshStandardMaterial map={groundMap} side={THREE.FrontSide} /> {/* Ground texture */}
                    </ mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    );
};

export default Portal;