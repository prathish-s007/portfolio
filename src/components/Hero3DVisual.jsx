import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Sub-component to generate canvas text texture for floating code symbols
function FloatingSymbol({ symbol, position, speed, range }) {
  const meshRef = useRef();

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    
    // Draw background (transparent)
    ctx.clearRect(0, 0, 256, 256);
    
    // Glassmorphic card styling inside the canvas texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(10, 10, 236, 236, 40);
    ctx.fill();
    ctx.stroke();

    // Draw text symbol
    ctx.font = 'bold 120px monospace';
    ctx.fillStyle = '#8b5cf6'; // Brand primary violet
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Glow effect for the text
    ctx.shadowColor = '#8b5cf6';
    ctx.shadowBlur = 15;
    ctx.fillText(symbol, 128, 128);

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [symbol]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Up-down floating motion
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * range;
    
    // Slow rotational drift
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
    meshRef.current.rotation.y = time * 0.25;
    meshRef.current.rotation.z = Math.cos(time * 0.15) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.2, 1.2]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide} 
        depthWrite={false}
      />
    </mesh>
  );
}

// Custom sphere displaying interactive wave distortion
function CentralSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (!sphereRef.current) return;
    const time = state.clock.getElapsedTime();
    // Rotate slowly
    sphereRef.current.rotation.y = time * 0.15;
    sphereRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <group>
      {/* Outer distorted glowing sphere */}
      <mesh ref={sphereRef} scale={1.4}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Subtle outer wireframe sphere for depth */}
      <mesh scale={1.42}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial 
          color="#6366f1" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>
    </group>
  );
}

// Scene wrapper
function VisualScene() {
  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2.0} />
      <directionalLight position={[-10, 10, -5]} intensity={1.0} color="#6366f1" />
      
      {/* Central Interactive Sphere */}
      <CentralSphere />

      {/* Floating Code Symbols */}
      <FloatingSymbol symbol="</>" position={[-2.2, 1.2, 0.5]} speed={1.2} range={0.25} />
      <FloatingSymbol symbol="{}" position={[2.2, -1.0, 0.8]} speed={0.8} range={0.3} />
      <FloatingSymbol symbol="[]" position={[1.8, 1.4, -0.6]} speed={1.5} range={0.2} />
      <FloatingSymbol symbol="<>" position={[-2.0, -1.4, -0.4]} speed={1.0} range={0.35} />
    </group>
  );
}

export default function Hero3DVisual() {
  return (
    <div className="w-full h-[320px] sm:h-[400px] md:h-[500px] relative">
      {/* Decorative background glows */}
      <div className="absolute inset-0 bg-radial-gradient scale-125 z-0" />
      
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
      >
        <VisualScene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
