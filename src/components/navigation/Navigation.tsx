import React, { useContext } from 'react';
import { SearchContext } from '../../context/search-context';

import styles from './Navigation.module.css';
import { NavigationItems } from './NavigationItems/NavigationItems';

const inputSearchStyle = {
  border: '4px solid smokewhite',
  backgroundColor: 'black',
  minWidth: '80px',
  width: '80%',
  color: 'white',
  borderRadius: '4px',
  margin: '10px',
};

export const Navigation = () => {
  const searchContext = useContext(SearchContext);

  return (
    <div className={styles.navigation}>
      <NavigationItems />

      <input
        id="searchBox"
        style={inputSearchStyle}
        placeholder="Search movies..."
        onChange={(event) =>
          setTimeout(() => searchContext.searchHandle(event.target.value), 1000)
        }
      />
    </div>
  );
};
