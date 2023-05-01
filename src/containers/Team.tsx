import Image from 'next/image';
import teammates from '@/data/team.json';
import cn from 'classnames';
import styles from '@/styles/containers/Team.module.scss';
type Props = {};

export default function Team({}: Props) {
  return (
    <div className={cn('ptb-11', styles['team'])}>
      <div className='grid-inner'>
        <div className={styles['title-cont']}>
          <p className='subheader clr-tertiary'>Our Team</p>
          <h1 className='title-tertiary'> The Task Force</h1>
        </div>
        <div className={styles['desc-cont']}>
          <p className='txt clr-tertiary'>
            We have assembled a talented and experienced team of producers,
            writers, researchers, and editors, who work tirelessly to create
            engaging and informative content for our listeners.
          </p>
        </div>
      </div>
      <div className='mt-11'>
        <div className='grid-inner'>
          {teammates.map(({ id, name, title, src }) => {
            return (
              <div className={styles['team-mate']} key={id}>
                <div className={styles['img']}>
                  <Image
                    src={src}
                    alt={name}
                    fill
                    sizes='(max-width: 768px) 100vw)'
                  />
                </div>
                <div className='clr-tertiary mt-3'>
                  <h5>{name}</h5>
                  <p className='mt-1'>{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
