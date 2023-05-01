//@ts-nocheck
import Batarang from '@/components/Batarang'
import Scene from '@/components/Scene'

type Props = {};

export default function HeroScene({}: Props) {
  return (
    <Scene camera={{ fov: 35, zoom: 2.3, near: 1, far: 1000 }}>
      <Batarang scale={[0.1, 0.1, 0.1]} />
    </Scene>
  );
}
