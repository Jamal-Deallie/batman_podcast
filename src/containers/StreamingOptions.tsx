import Image from 'next/image';
import styles from '@/styles/containers/StreamingOptions.module.scss';
import options from '@/data/streamingOptions.json';
import cn from 'classnames';

export default function StreamingOptions() {
  return (
    <div className={cn('grid-inner ptb-7', styles['options'])}>
      <div className={styles['desc-cont']}>
        <p className='subheader'>Listen Now</p>
        <h2 className='title-tertiary-md mb-3'>
          AVAILABLE ACROSS ALL STREAMING PLATFORMS
        </h2>
        <p className='clr-tertiary txt'>
          Join us on a quest to uncover the greatest mystery in Gotham City -
          the true identity of Batman. For decades, the Caped Crusader has
          fought crime and protected the innocent, always remaining shrouded in
          secrecy.
        </p>
      </div>
      <aside>
        <div className={styles['grid-cont']}>
          {options.map(({ company, id, src }) => {
            return (
              <div className={styles['image']} key={id}>
                <Image src={src} alt={company} fill sizes={'100vw'} priority />
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
