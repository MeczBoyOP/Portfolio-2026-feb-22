import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Torus, Icosahedron, Box, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef, Suspense } from "react";

function RotatingTorus({ color, position, args, speed }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.elapsedTime * speed;
        ref.current.rotation.y = clock.elapsedTime * speed * 0.7;
    });
    return (
        <Float speed={1.5} floatIntensity={1}>
            <mesh ref={ref} position={position}>
                <Torus args={args}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.7}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </Torus>
            </mesh>
        </Float>
    );
}

function RotatingIco({ color, position }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.elapsedTime * 0.5;
        ref.current.rotation.y = clock.elapsedTime * 0.8;
    });
    return (
        <Float speed={2} floatIntensity={1.5}>
            <mesh ref={ref} position={position} scale={1.8}>
                <Icosahedron args={[1, 1]}>
                    <MeshDistortMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.4}
                        distort={0.3}
                        speed={1.5}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </Icosahedron>
            </mesh>
        </Float>
    );
}

function RotatingBox({ color, position }) {
    const ref = useRef();
    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.elapsedTime * 0.4;
        ref.current.rotation.y = clock.elapsedTime * 0.6;
        ref.current.rotation.z = clock.elapsedTime * 0.3;
    });
    return (
        <Float speed={1} floatIntensity={0.8}>
            <mesh ref={ref} position={position}>
                <Box args={[1.5, 1.5, 1.5]}>
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.5}
                        wireframe
                    />
                </Box>
            </mesh>
        </Float>
    );
}

export function SkillsModel({ style }) {
    return (
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ antialias: true, alpha: true }} style={style}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} color="#00f5ff" intensity={3} />
                <pointLight position={[-5, -5, 5]} color="#bf00ff" intensity={2} />
                <RotatingIco color="#00f5ff" position={[0, 0, 0]} />
                <RotatingTorus color="#bf00ff" position={[0, 0, 0]} args={[2.5, 0.05, 16, 80]} speed={0.4} />
                <RotatingTorus color="#ff006e" position={[0, 0, 0]} args={[3.2, 0.04, 16, 80]} speed={-0.25} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
            </Suspense>
        </Canvas>
    );
}

export function ProjectsModel({ style }) {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 55 }} gl={{ antialias: true, alpha: true }} style={style}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <pointLight position={[3, 3, 3]} color="#39ff14" intensity={2.5} />
                <pointLight position={[-3, -3, 3]} color="#4d79ff" intensity={2} />
                <Float speed={1.5} floatIntensity={2}>
                    <mesh>
                        <Sphere args={[1.2, 64, 64]}>
                            <MeshDistortMaterial
                                color="#39ff14"
                                emissive="#39ff14"
                                emissiveIntensity={0.3}
                                distort={0.5}
                                speed={3}
                                metalness={0.6}
                                roughness={0.2}
                            />
                        </Sphere>
                    </mesh>
                </Float>
                <RotatingTorus color="#4d79ff" position={[0, 0, 0]} args={[2, 0.06, 16, 80]} speed={0.5} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={-1} />
            </Suspense>
        </Canvas>
    );
}

export function ContactModel({ style }) {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 55 }} gl={{ antialias: true, alpha: true }} style={style}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <pointLight position={[4, 4, 4]} color="#ff6600" intensity={2} />
                <pointLight position={[-4, -4, 4]} color="#bf00ff" intensity={1.5} />
                <RotatingBox color="#ff6600" position={[0, 0, 0]} />
                <RotatingTorus color="#ff6600" position={[0, 0, 0]} args={[2.3, 0.05, 16, 80]} speed={0.35} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
            </Suspense>
        </Canvas>
    );
}
