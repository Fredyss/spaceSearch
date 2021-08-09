import React, { useContext } from 'react';
import { MovieGrid } from '../../components/MovieGrid/MovieGrid';
import { FavouritesContext } from '../../context/favourites-context';
import { SearchContext } from '../../context/search-context';
import useStyles from './Favourites.styles';

export const Favourites = () => {
  const styles = useStyles();
  const favouritesContext = useContext(FavouritesContext);
  const searchContext = useContext(SearchContext);

  let content = (
    <div className={styles.content}>
      No favourites movies yet
    </div>
  );

  if (favouritesContext.favourites.length)
    content = <MovieGrid data={favouritesContext.favourites} />;
  if (searchContext.result.length)
    content = <MovieGrid data={searchContext.result} />;
  return content;
};
