import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Stage,
} from "@react-three/drei";

const Jitoneko = () => {
  const nekoRef = useRef<any>();
  const { scene: jitonekoScene } = useGLTF("/home/jitoneko.glb");

  useFrame(() => {
    nekoRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={nekoRef} scale={0.08}>
      <group>
        <primitive object={jitonekoScene} />
      </group>
    </mesh>
  );
};

const Model = () => {
  return (
    <Canvas resize={{ scroll: false }} flat>
      <PerspectiveCamera makeDefault position={[1, 1, 1]} />
      <OrbitControls enablePan={false} enableZoom={false} />
      <Stage>
        <Jitoneko />
      </Stage>
      <OrbitControls />
    </Canvas>
  );
};

export default Model;
