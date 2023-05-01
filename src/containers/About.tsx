import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';;
import cn from 'classnames';
import styles from '@/styles/containers/About.module.scss';

type Props = {};

export default function About({}: Props) {
  const root = useRef<HTMLDivElement | null>(null);

  return (
    <div className='ptb-11' ref={root}>
      <div className='grid-inner'>
        <div className={styles['title-cont']}>
          <p className='subheader'>Our Investigation</p>
          <h1 className='title-tertiary'>{'GOTHAMS'}</h1>
          <h1 className='title-tertiary'>GREATEST MYSTERY</h1>
        </div>
      </div>
      <div className={styles['investigation']}>
        <div className='grid-inner cont-mart'>
          <div className={styles['img-wrap']}>
            <Image
              src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1682904943/batman_podcast/batman-img_oh2esn.jpg'}
              alt='Batman'
              fill
              sizes='(max-width: 768px) 100vw)'
            />
          </div>
          <div className={styles['desc-cont']}>
            <h3 className='title-tertiary-md mb-3'>
              We explore every aspect of this enduring mystery
            </h3>
            <p className='clr-tertiary mb-2 txt'>
              Welcome to 'Unmasking Gotham's Dark Knight,' the podcast that's
              dedicated to unraveling one of the greatest mysteries in comic
              book history... the true identity of Batman.
            </p>
            <p className='clr-tertiary txt'>
              For years, gothamites have speculated about who lies beneath the
              cowl of Gotham's vigilante protector. In this podcast, we'll
              explore every theory, follow every clue, and examine every aspect
              of Batman's mythology to try to get to the bottom of this enduring
              mystery.
            </p>
            <Link className={cn(styles['link-btn'], 'mt-3')} href='about'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
