import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// Import random from three/examples/jsm/libs/lil-gui.module.min or use a custom generator
// To avoid potential import path issues, we can generate random points in a sphere manually.

function ParticleRing() {
  const ref = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Generate random points in a sphere
  const [positions] = useState(() => {
    const count = 1500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2 + Math.random() * 4; // sphere radius between 2 and 6
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  });

  // Track mouse coordinates on window
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: -(e.clientY / window.innerHeight) + 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Slow rotation
    ref.current.rotation.x += delta * 0.05;
    ref.current.rotation.y += delta * 0.03;

    // Parallax mouse effect
    ref.current.position.x += (mouse.x * 1.5 - ref.current.position.x) * 0.1;
    ref.current.position.y += (mouse.y * 1.5 - ref.current.position.y) * 0.1;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#09090b]">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.08),rgba(9,9,11,0))] z-1" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/50 to-[#09090b] z-1" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleRing />
      </Canvas>
    </div>
  );
}
