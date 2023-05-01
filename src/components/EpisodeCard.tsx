import { useRef } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/components/EpisodeCard.module.scss';
type Props = {};

export default function EpisodeCard({}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null!);

  return (
    <div className={cn(styles['card'], 'primary-gradient')}>
      <div className={'grid-inner'}>
        <div className={styles['left']}>
          <div className={styles['cover']}>
            <Image
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1682904943/batman_podcast/podcast-cover_mrxvlc.jpg'
              alt='guest'
              fill
              sizes='(max-width: 768px) 100vw)'
            />
          </div>

          <div className='mt-3'>
            <p className='clr-tertiary'>Host: Barbara Gordon</p>
            <p className='clr-tertiary'>Producer: Richard 'Dick" Grayson</p>
          </div>
        </div>

        <div className={styles['right']}>
          <div className={styles['top']}>
            <div className={styles['title']}>
              <h3 className='title-tertiary-sm'>Episode title</h3>
              <button className={styles['share-btn']}>share</button>
            </div>
            <p className='clr-tertiary mt-2'>
              A history of the city where Batman operates, including the various
              influences that have shaped its culture and politics.
            </p>
          </div>

          <div className={styles['middle']}>
            <audio controls id='tts-audio' ref={audioRef}>
              <source src={'https://res.cloudinary.com/dtwk4dm3g/video/upload/v1682904786/batman_podcast/sampleaudio_ilmqbl.mp3'} type='audio/mpeg' />
            </audio>
          </div>

          <div className={styles['bottom']}>
            <p className='clr-tertiary'>Special Guest:</p>
            <div className={styles['guest-cont']}>
              <div className={styles['guest']}>
                <Image
                  src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1682904943/batman_podcast/placeholder_ngvcvp.jpg'
                  alt='guest'
                  fill
                  sizes='(max-width: 768px) 100vw)'
                />
              </div>
              <div>
                <p className={cn(styles['guest-name'], 'clr-tertiary')}>
                  Commissioner Gordon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
