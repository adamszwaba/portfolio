import * as React from 'react';
import styles from './topnav.module.scss';

const topnav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div>logo</div>
      <div>Links</div>
    </nav>
  );
};
export default topnav;
