import MarqueeWrap from '@/animation/MarqueeWrap';
import SponsorCard from '@/components/SponsorCard';
import sponsors from '@/data/sponsors.json';
import styles from '@/styles/containers/Sponsors.module.scss';
import cn from 'classnames';

type Props = {};

export default function Sponsors({}: Props) {
  return (
    <section className={cn(styles['sponsors'], 'ptb-11')}>
      <div className='main-cont'>
        <div className={styles['title-cont']}>
          <p className='subheader'>Our Sponsors</p>
          <h1 className='title-tertiary'>The Silent</h1>
          <h1 className='title-tertiary'>heros</h1>
        </div>
        <div className={cn(styles['desc-cont'], 'mt-3')}>
          <p className='txt clr-tertiary'>
            We're proudly sponsored by the top companies in the world who share
            our passion for ending the reign of the Dark Knight. With their
            help, we're' able you high-quality content and in-depth
            investigations into the true identity of Batman.
          </p>
        </div>
      </div>

      <div className='mt-11'>
        <MarqueeWrap>
          <div className={styles['marquee-inner']}>
            <div className={cn(styles['card-single'], 'item-wrap')}>
              {sponsors.map(({ ...sponsor }) => {
                return <SponsorCard key={sponsor.id} {...sponsor} />;
              })}
            </div>
          </div>
        </MarqueeWrap>
      </div>
    </section>
  );
}
