import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './DesktopNavigation.styles';

export const DesktopNavigation = (): JSX.Element => {
  const styles = useStyles()

  return (
    <ul className={styles.primaryNav}>
        <li className={styles.liStyle}>
          <Link to='/home' className={styles.linkStyle}>
            Home
          </Link>
        </li>
        <li className={styles.liStyle}>
          <Link to='/favourites' className={styles.linkStyle}>
            Favourites
          </Link>
        </li>
        <li className={styles.liStyle}>
          <Link to='/watch-later' className={styles.linkStyle}>
            Watch later
          </Link>
        </li>
      </ul>
  );
};