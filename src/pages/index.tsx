import { Button } from '../components/Button';
import MouseDown from '@/components/MouseDown';
import StreamingOptions from '@/containers/StreamingOptions';
import LatestEpisodes from '@/containers/LatestEpisodes';
import NewsLetter from '@/containers/NewsLetter';
import About from '@/containers/About';
import Host from '@/containers/Host';
import dynamic from 'next/dynamic';
import styles from '@/styles/pages/Home.module.scss';

type Props = {};

const DynamicScene = dynamic(() => import('@/containers/HeroScene'), {
  ssr: false,
});

export default function home({}: Props) {
  return (
    <>
      <section className={styles['cont']}>
        <div className={styles['title']}>
          <h1 className='title-tertiary'>
            UNMASK THE <br />
            CAPE CRUSADER
          </h1>
          <div className={styles['mouse-down']}>
            <MouseDown />
          </div>
        </div>
        <div className={styles['scene']}>
          <DynamicScene />
        </div>
      </section>
      <div className='secondary-gradient'>
        <About />
        {/* <Reviews /> */}
      </div>
      <div className='primary-gradient'>
        <StreamingOptions />
        <Host />
      </div>
      <LatestEpisodes />
      <NewsLetter />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  };
}
