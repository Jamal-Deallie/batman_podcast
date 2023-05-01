import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/containers/Host.module.scss';
type Props = {};

export default function Host({}: Props) {
  return (
    <div className='ptb-11'>
      <section className={cn(styles['host'], 'grid-inner')}>
        <aside className={styles['img-wrap']}>
          <div className={styles['img']}>
            <Image
              alt='Barbara Gordon'
              fill
              sizes='(max-width: 768px) 100vw)'
              src={'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1682904943/batman_podcast/host_a98ipp.jpg'}
            />
          </div>
        </aside>
        <div className={styles['desc-cont']}>
          <p className='subheader'>Our Host</p>
          <h2 className='title-tertiary-md mb-3'>come along for the ride</h2>
          <p className='txt clr-tertiary'>
            Join us on a quest to uncover the greatest mystery in Gotham City -
            the true identity of Batman. For decades, the Caped Crusader has
            fought crime and protected the innocent, always remaining shrouded
            in secrecy.
          </p>
          <p className='txt clr-tertiary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
      </section>
    </div>
  );
}
