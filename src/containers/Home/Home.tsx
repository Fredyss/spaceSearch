import React, { useContext, useEffect, useState } from 'react';
import { getTopRatedMovies, getPopularMovies, getUpcomingMovies } from '../../api/Movies';
import { MovieGrid } from '../../components/MovieGrid/MovieGrid';
import { Rows } from '../../components/Row/Rows';
import { SearchContext } from '../../context/search-context';
import { Movie } from '../../shared/globals/Globals';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const playerStyle = {
  width: '100%',
  minHeight: '480px',
  maxHeight: '720px'
};

export const Home = () => {
  const searchContext = useContext(SearchContext);

  const [topRated, setTopRated] = useState([]);
  const [popular, getPopular] = useState([]);
  const [upcoming, getUpcoming] = useState([]);

  const [movie, setSelectedMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      getTopRatedMovies(async response => {
        const res = await response;
        setTopRated(res.data.results);
        return res;
      });

      getPopularMovies(async response => {
        const res = await response;
        getPopular(res.data.results);
        return res;
      });

      getUpcomingMovies(async response => {
        const res = await response;
        getUpcoming(res.data.results);
        return res;
      });
    }
    fetchData();
    setSelectedMovie({});
  }, [setSelectedMovie]);

  const movieHandler = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  let content = (
    <div>
      {Object.keys(movie).length && (
        <div style={playerStyle}>
          <VideoPlayer data={movie} />
        </div>
      )}
      <Rows data={topRated} type='Top rated' videoHandler={movieHandler} />
      <Rows data={popular} type='Popular' videoHandler={movieHandler} />
      <Rows data={upcoming} type='Upcoming' videoHandler={movieHandler} />
    </div>
  );

  if (searchContext.result.length) content = <MovieGrid data={searchContext.result} />;
  return content;
};
