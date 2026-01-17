
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';

// Define aliases for intrinsic elements to bypass JSX property check errors
const Group = 'group' as any;
const AmbientLight = 'ambientLight' as any;
const Mesh = 'mesh' as any;
const PointLight = 'pointLight' as any;

const ParticleField = ({ intensity }: { intensity: number }) => {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(time * 0.05) * 0.1 * intensity;
    ref.current.rotation.y = Math.cos(time * 0.08) * 0.1 * intensity;
  });

  return (
    <Group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.15 * intensity}
        />
      </Points>
    </Group>
  );
};

const AnimatedGrid = ({ intensity }: { intensity: number }) => {
  const gridRef = useRef<THREE.Mesh>(null!);
  
  const sectionColor = useMemo(() => new THREE.Color("#003366").multiplyScalar(intensity), [intensity]);
  const cellColor = useMemo(() => new THREE.Color("#00f2ff").multiplyScalar(intensity * 0.2), [intensity]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    gridRef.current.position.y = -6 + Math.sin(time * 0.2) * 0.3 * intensity;
    gridRef.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.05) * 0.05 * intensity;
  });

  return (
    // Updated from <mesh> to <Mesh> to fix JSX type error
    <Mesh ref={gridRef} position={[0, -6, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <Grid 
        infiniteGrid 
        fadeDistance={40} 
        fadeStrength={10} 
        cellSize={1.5} 
        sectionSize={6} 
        sectionColor={sectionColor} 
        cellColor={cellColor} 
        sectionThickness={1}
        cellThickness={0.5}
      />
    </Mesh>
  );
}

const Background3D: React.FC<{ intensity: number }> = ({ intensity }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
      <AmbientLight intensity={0.3} />
      <ParticleField intensity={intensity} />
      <AnimatedGrid intensity={intensity} />
      <PointLightWithPulse position={[15, 10, 5]} color="#00f2ff" intensity={1} delay={0} />
      <PointLightWithPulse position={[-15, -10, 5]} color="#003366" intensity={1.5} delay={1} />
    </Canvas>
  );
};

const PointLightWithPulse = ({ position, color, intensity, delay }: any) => {
  const lightRef = useRef<THREE.PointLight>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + delay;
    const p = Math.pow(Math.sin(time * Math.PI * 0.4), 10);
    lightRef.current.intensity = intensity + p * 2;
  });
  // Updated from <pointLight> to <PointLight> to fix JSX type error
  return <PointLight ref={lightRef} position={position} color={color} intensity={intensity} />;
}

export default Background3D;
