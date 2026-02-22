import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Stars, Float, Ring, Torus, Icosahedron, Octahedron } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function NeonSphere() {
    const meshRef = useRef();
    useFrame(({ clock }) => {
        meshRef.current.rotation.x = clock.elapsedTime * 0.2;
        meshRef.current.rotation.y = clock.elapsedTime * 0.3;
    });
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={meshRef}>
                <Sphere args={[1.4, 64, 64]}>
                    <MeshDistortMaterial
                        color="#00f5ff"
                        emissive="#00f5ff"
                        emissiveIntensity={0.3}
                        distort={0.4}
                        speed={2}
                        roughness={0.1}
                        metalness={0.9}
                        wireframe={false}
                    />
                </Sphere>
                {/* Inner glow sphere */}
                <Sphere args={[1.45, 32, 32]}>
                    <meshBasicMaterial color="#00f5ff" transparent opacity={0.05} side={THREE.BackSide} />
                </Sphere>
            </mesh>
        </Float>
    );
}

function OrbitingRing({ radius, speed, color, thickness }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.x = Math.PI / 3 + clock.elapsedTime * speed;
        ref.current.rotation.z = clock.elapsedTime * speed * 0.5;
    });
    return (
        <mesh ref={ref}>
            <Torus args={[radius, thickness, 16, 100]}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.7}
                />
            </Torus>
        </mesh>
    );
}

function FloatingIco({ position, color, speed }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.elapsedTime * speed;
        ref.current.rotation.y = clock.elapsedTime * speed * 1.3;
    });
    return (
        <Float speed={1.5} floatIntensity={2}>
            <mesh ref={ref} position={position}>
                <Icosahedron args={[0.25, 0]}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.5}
                        wireframe
                    />
                </Icosahedron>
            </mesh>
        </Float>
    );
}

function FloatingOcta({ position, color }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.elapsedTime * 0.5;
        ref.current.rotation.z = clock.elapsedTime * 0.3;
    });
    return (
        <Float speed={2.5} floatIntensity={1.8}>
            <mesh ref={ref} position={position}>
                <Octahedron args={[0.3]}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.6}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </Octahedron>
            </mesh>
        </Float>
    );
}

export default function Hero3D({ style }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            style={style}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={2} />
                <pointLight position={[-5, -5, -5]} color="#bf00ff" intensity={1.5} />
                <pointLight position={[0, 5, -5]} color="#ff006e" intensity={1} />

                <NeonSphere />
                <OrbitingRing radius={2.2} speed={0.4} color="#00f5ff" thickness={0.015} />
                <OrbitingRing radius={2.6} speed={-0.25} color="#bf00ff" thickness={0.01} />
                <OrbitingRing radius={3.0} speed={0.15} color="#ff006e" thickness={0.008} />

                <FloatingIco position={[3.5, 1, 0]} color="#39ff14" speed={0.8} />
                <FloatingIco position={[-3.5, -1, 0]} color="#ff006e" speed={0.6} />
                <FloatingIco position={[2, -2.5, -1]} color="#4d79ff" speed={1.0} />

                <FloatingOcta position={[-2.5, 2, 0]} color="#bf00ff" />
                <FloatingOcta position={[3, -1.5, 1]} color="#00f5ff" />

                <Stars
                    radius={80}
                    depth={50}
                    count={3000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={0.5}
                />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 3}
                />
            </Suspense>
        </Canvas>
    );
}
