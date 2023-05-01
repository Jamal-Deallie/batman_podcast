import styles from '@/styles/components/MouseDown.module.scss';


export default function MouseDown() {
  return (
    <div className={styles['mouse-down']}>
      <div className={styles['down']} />
      <div className={styles['text']}>
        <p>Scroll Down</p>
      </div>
    </div>
  );
}
