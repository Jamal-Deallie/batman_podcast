import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, ContactShadows } from '@react-three/drei';
import styles from '@/styles/components/Scene.module.scss';
type SceneProps = {
  children: ReactNode;
  //   fav: number;
  //   zoom: number;
  //   near: number;
  //   far: number;
};
export default function Scene({ children, ...props }: SceneProps) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props} className={styles['scene']}>
      {/* <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} /> */}

      {children}
      <Preload all />

    </Canvas>
  );
}
