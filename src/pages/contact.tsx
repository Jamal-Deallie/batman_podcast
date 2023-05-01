import Form from '@/components/Form';
import Layout from '@/components/Layout';
import styles from '@/styles/pages/contact.module.scss';
import cn from 'classnames';
type Props = {};

export default function Contact({}: Props) {
  return (
    <>
      <section className={cn(styles['contact'], 'ptb-11')}>
        <div className='mt-6'>
          <div className='grid-inner'>
            <div>
              <h1 className='title-tertiary'>Any</h1>
              <h1 className='title-tertiary'>Questions?</h1>
            </div>
            <div className={cn(styles['desc'], 'mt-3')}>
              <p className='clr-tertiary txt'>
                We take on select projects, working with companies who are
                inventing or reinventing. If there’s a project you’d like to
                talk to us about, please get in touch.
              </p>
            </div>
          </div>

          <div className='grid-inner'>
            <div className={styles['form-wrap']}>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
