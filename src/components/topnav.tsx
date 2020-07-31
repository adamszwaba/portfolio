import * as React from 'react';
import styles from './topnav.module.scss';
import Logo from '../../public/favicon.svg';
import Link from 'next/link';

const topnav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.logoBar}>
            <Logo className={styles.logo} />
            <span className={styles.name}>@AdamSzwaba</span>
          </a>
        </Link>
        <div>Links</div>
      </div>
    </nav>
  );
};
export default topnav;
