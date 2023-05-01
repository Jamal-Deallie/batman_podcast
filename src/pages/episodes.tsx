import EpisodeCard from '@/components/EpisodeCard';
import Layout from '@/components/Layout';
import styles from '@/styles/pages/Episodes.module.scss';
import cn from 'classnames';

type Props = {};

export default function Episodes({}: Props) {
  return (
    <>
      <section className={cn(styles['episodes'], 'ptb-11 secondary-gradient')}>
        <div className='mt-6'>
          <div className='grid-inner'>
            <div className={styles['title-cont']}>
              <h1 className='title-tertiary'>Episode</h1>
              <h1 className='title-tertiary'>Vault</h1>
            </div>
            <div className={cn(styles['desc-cont'], 'mt-3')}>
              <p className='clr-tertiary txt'>
                Each episode is packed with fascinating details and analysis, as
                well as lively discussions between our hosts and guests. Our
                current episodes are sure to keep you engaged and entertained,
                as we unravel the mystery of the Caped Crusader's true identity.
              </p>
            </div>
          </div>
          <div className='mt-11'>
            <div className='main-cont'>
              {new Array(10).fill(<EpisodeCard />).map((_, i) => {
                return <EpisodeCard key={i} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
