import Image from 'next/image';
import cn from 'classnames';
import styles from '@/styles/components/SponsorCard.module.scss';

type CardProps = {
  src: string;
  company: string;
  height: number;
  width: number;
};

export default function SponsorCard({
  src,
  company,
  width,
  height,
}: CardProps) {
  return (
    <div className={cn('marquee-item', styles['card'])}>
      <div className={styles['card-wrap']}>
        <div className={cn(styles['logo'], styles[company])} style={{ aspectRatio: width / height }}>
          <Image
            style={{ aspectRatio: width / height }}
            src={src}
            fill
            alt={company}
            sizes={'(max-width: 738px) 100vw)'}
          />
        </div>
      </div>
    </div>
  );
}
