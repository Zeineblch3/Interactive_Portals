import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import AudioPlayer from "./components/AudioPlayer";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "./index.css";

function App() {
  const [isInPortal, setIsInPortal] = useState(false);

  return (
    <>
      {/* Navbar hides when inside a portal */}
      <Navbar isInPortal={isInPortal} />

      {/* Fixed UI Elements */}
      <div className="absolute bottom-5 right-5 pointer-events-auto bg-white/80 rounded-lg p-2 shadow-lg z-50">
        <AudioPlayer />
      </div>

      {/* Three.js Scene */}
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <Experience setIsInPortal={setIsInPortal} />
      </Canvas>
    </>
  );
}

export default App;
