import React, { useCallback, useContext, useState } from 'react';
import { MovieGrid } from '../../components/MovieGrid/MovieGrid';
import { MovieList } from '../../components/MovieList/MovieList';
import { FavouritesContext } from '../../context/favourites-context';
import { SearchContext } from '../../context/search-context';
import { WatchLaterContext } from '../../context/watchLater-context';
import { Movie } from '../../shared/globals/Globals';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import classes from './WatchLater.module.css';

export const WatchLater = () => {
  const watchLaterContext = useContext(WatchLaterContext);
  const searchContext = useContext(SearchContext);
  const favouritesContext = useContext(FavouritesContext);

  const [selectedMovie, setSelectedMovie] = useState({});
  const [movies, setMovies] = useState(watchLaterContext.watchLaterList);

  const fetchData = useCallback(() => {
    setMovies([...watchLaterContext.watchLaterList]);
  }, [watchLaterContext]);

  const videoHandle = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const refresh = () => {
    setTimeout(() => {
      fetchData();
    }, 100);
  };

  let container = (
    <div style={{ color: 'white', margin: '10% 40%' }}>No watch later movies yet</div>
  );

  const movieHandler = (movie: Movie, type: string) => {
    switch (type) {
      case 'favourites':
        favouritesContext.addMovie(movie);
        break;

      case 'watchLater':
        watchLaterContext.removeMovie(movie);
        refresh();
        break;

      default:
        break;
    }
  };

  if (movies.length)
    container = (
      <div className={classes.container}>
        <MovieList
          data={movies}
          videoHandler={movie => videoHandle(movie)}
          movieHandler={movieHandler}
        />

        <div className={classes.player}>
          <VideoPlayer data={selectedMovie} />
        </div>
      </div>
    );
  if (searchContext.result.length) container = <MovieGrid data={searchContext.result} />;
  return container;
};
