import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayout';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import Menu from '@/components/Menu';
import Image from 'next/image';
import styles from '@/styles/components/Navbar.module.scss';
import { useLenis, ReactLenis } from '@studio-freight/react-lenis';
import { useRouter } from 'next/router';
import cn from 'classnames';

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

export default function Navbar() {
  const [bgChange, setBgColorChange] = useState<boolean>(false);
  // const lenis = useLenis((lenis: any) => lenis);

  // console.log(lenis.scroll);

  useIsomorphicLayoutEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setBgColorChange(true);
      } else {
        setBgColorChange(false);
      }
    };

    window.addEventListener('scroll', changeNavbarColor);
  });

  const containerClass = cn(
    styles['container'],
    bgChange ? 'secondary-bg' : 'ghost-bg'
  );

  return (
    <nav className={containerClass}>
      <div className={styles.wrap}>
        <Link href='/'>
          <div className={styles['logo']}>
            <Image
              src={'/icon/logo-2.svg'}
              alt='13'
              fill
              sizes={'100vw'}
              priority
            />
          </div>
        </Link>

        <div className={styles.links}>
          {links.map(({ id, label, path }) => {
            return (
              <div key={id} id='links'>
                <NavLink href={path} passHref>
                  {label}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className={styles['menu']}>
          <Menu />
        </div>
      </div>
    </nav>
  );
}
