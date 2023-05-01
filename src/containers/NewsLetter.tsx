import cn from 'classnames';
import styles from '@/styles/containers/NewsLetter.module.scss';

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <section className={styles['newsletter']}>
      <div className='main-cont ptb-11'>
        <div className={cn(styles['title-cont'], 'mb-6')}>
          <h1 className='title-tertiary'>Always Stay</h1>
          <h1 className='title-tertiary'>Up to date</h1>
        </div>
        <div className={cn(styles['desc-cont'], 'mb-6')}>
          <p className='clr-tertiary'>
            Get the latest clues and theories in the search for Batman's true
            identity. Sign up for our newsletter today
          </p>
        </div>
        <div className={styles['form']}>
          <form>
            <div className={styles['input-wrap']}>
              <input placeholder='Email' type='email' />
              <button className={styles['btn-secondary']} type='submit'>
                <span className='txt clr-tertiary'>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
