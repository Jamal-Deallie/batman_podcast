//@ts-nocheck

import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from '@react-three/fiber';
import {
  Sparkles,
  Shadow,
  ContactShadows,
  Billboard,
  Environment,
  BakeShadows,
  OrbitControls,
  AccumulativeShadows,
  RandomizedLight,
} from '@react-three/drei';

export default function Batarang({ ...props }) {
  const { materials, scene } = useLoader(
    GLTFLoader,
    '/models/Batarang/batman_the_dark_knight_batarang.glb'
  ); // load the model
  const mesh = useRef(null!);

  useFrame(state => {
    const t = state.clock.getElapsedTime();
    // mesh.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    mesh.current.rotation.y = Math.sin(t / 4) / 8;
    mesh.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    mesh.current.rotation.z = (1 + Math.sin(t / 1.5)) / -40;
    mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <>
      {/* <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[512, 512]}
        castShadow
      /> */}
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <primitive ref={mesh} object={scene} />
      <Environment preset='city' />
    </>
  );
}
