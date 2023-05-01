import { useRef, useEffect, useState, useCallback } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { shallow } from 'zustand/shallow';
import styles from '@/styles/components/Menu.module.scss';
import cn from 'classnames';

type Props = {};

export const links = [
  {
    id: 1,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    label: 'About',
    path: 'about',
  },
  {
    id: 3,
    label: 'Episodes',
    path: 'episodes',
  },
  {
    id: 4,
    label: 'Contact',
    path: 'contact',
  },
];
export default function Menu({}: Props) {
  const [navIsOpened, setNavIsOpened] = useStore(
    ({ navIsOpened, setNavIsOpened }) => [navIsOpened, setNavIsOpened],
    shallow
  );
  const openShopMenu = () => setNavIsOpened(!navIsOpened);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap.timeline({ pause: true });
    let links = gsap.utils.toArray('#link');

    let ctx = gsap.context(() => {
      if (tl.current) {
        tl.current
          .fromTo(
            '#line1',
            { transform: 0 },
            {
              transform: 'rotate(45deg) translate(7px, 6px)',
            },
            0
          )
          .fromTo(
            '#line2',
            { transform: 0 },
            {
              opacity: 0,
            },
            0
          )
          .fromTo(
            '#line3',
            { transform: 0 },
            {
              transform: 'rotate(-45deg) translate(7px, -6px)',
            },
            0
          )
          .fromTo(
            '#cont',
            { yPercent: 900, autoAlpha: 0 },
            {
              duration: 1,
              transformOrigin: 'right top',
              autoAlpha: 1,
              yPercent: 0,
              display: 'block',
              ease: 'power3.inOut',
            },
            '-=50%'
          )
          .fromTo(
            links,
            { yPercent: 100, opacity: 0 },
            {
              duration: 0.5,
              yPercent: 0,
              opacity: 1,
              stagger: {
                amount: 0.2,
              },
            }
          )
          .reverse();
      }
    });

    return () => ctx.revert();
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (tl.current) {
      tl.current.reversed(!navIsOpened);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tl, navIsOpened]);

  return (
    <>
      <button
        role='button'
        id='btn'
        onClick={openShopMenu}
        className={styles.btn}>
        <div id='line1' />
        <div id='line2' />
        <div id='line3' />
      </button>

      <div className={styles.menu} id='cont'>
        <div className={cn(styles.overlay, 'primary-gradient')}>
          <ul className='pt-xxl'>
            {links.map(({ id, label, path }) => {
              return (
                <li key={id} onClick={openShopMenu} id='link'>
                  <Link href={path} className='title-tertiary'>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
