import Link from 'next/link';
import cn from 'classnames';
import EpisodeCard from '@/components/EpisodeCard';
import styles from '@/styles/containers/LatestEpisodes.module.scss';

export default function LatestEpisodes() {
  return (
    <div className='secondary-gradient ptb-11'>
      <div className='main-cont'>
        <div className='grid-inner'>
          <div className={styles['title-cont']}>
            <p className='subheader'>Latest Episodes</p>
            <h1 className='title-tertiary'>Explore New</h1>
            <h1 className='title-tertiary'>Theories</h1>
          </div>

          <div className={styles['desc-cont']}>
            <p className='txt clr-tertiary'>
              Each episode is packed with fascinating details and analysis, as
              well as lively discussions between our hosts and guests. Whether
              you are a lifelong fan of Batman or a newcomer to the world of the
              Caped Crusader, our latest episodes will keep you engaged and
              entertained
            </p>
          </div>
        </div>

        <div className='main-cont mt-10'>
          <EpisodeCard />
          <EpisodeCard />
        </div>
        <div>
          <Link className={cn(styles['link-btn'], 'mt-3')} href='about'>
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
