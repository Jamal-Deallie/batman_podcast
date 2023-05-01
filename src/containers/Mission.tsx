import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/containers/Mission.module.scss';

type Props = {};

export default function Mission({}: Props) {
  return (
    <section className={cn(styles['mission'], 'secondary-gradient ptb-11')}>
      <div className='main-cont'>
        <div className='grid-inner'>
          <div className={styles['title-cont']}>
            <p className='subheader'>Our Mission</p>
            <h1 className='title-tertiary'>who lies beneath the cowl</h1>
          </div>
        </div>

        <div className='grid-inner'>
          <div className={cn(styles['content'], 'mt-11')}>
            <div className={styles['desc-cont']}>
              <p className='txt clr-tertiary'>
                The podcast is an in-depth investigation into the true identity
                of Batman. Hosted by a team of experts, each episode delves into
                a different aspect of the mystery, from the character's origins
                to the various theories that have been proposed over the years.
                Using a combination of historical research, literary analysis,
                and pop culture knowledge, the podcast explores every possible
                angle of the question: who is Batman?
              </p>
              <p className='txt clr-tertiary mt-2'>
                The hosts examine every clue, analyze every character and story,
                and consider all of the evidence in their quest to solve one of
                the most enduring mysteries in comic book history. With
                fascinating insights, expert analysis, and lively discussion,
                this podcast is essential listening for anyone who wants to know
                the truth about the Dark Knight's secret identity.
              </p>
            </div>
          </div>
          <div className={cn(styles['img-wrap'], 'mt-6')}>
            <div className={styles['img']}>
              <Image
                alt='Batman'
                fill
                sizes='(max-width: 768px) 100vw)'
                src={
                  'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1682904943/batman_podcast/mission_xmhv0r.jpg'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
