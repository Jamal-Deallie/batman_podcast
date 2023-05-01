import Layout from '@/components/Layout';
import Mission from '@/containers/Mission';
import Team from '@/containers/Team';
import Sponsors from '@/containers/Sponsors';

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Mission />
      <Team/>
      <Sponsors/>
    </>
  );
}
