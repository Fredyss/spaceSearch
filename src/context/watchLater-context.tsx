import React, { ReactNode, useState } from 'react';
import { notify } from '../shared/globals/GlobalFunctions';
import { Movie } from '../shared/globals/Globals';

export const WatchLaterContext = React.createContext({
  watchLaterList: [],
  addMovie: (movie: any) => movie,
  removeMovie: (movie: any) => movie
});

interface props {
  children: ReactNode;
}

const WatchLaterContextProvider = ({ children }: props) => {
  const [watchLaterList, setWatchLaterList] = useState([]);

  const watchLaterHandler = (movie: Movie, action: string): void => {
    let temp = [] as any;
    switch (action) {
      case 'add':
        temp = watchLaterList;
        const foundMovie = temp.find((item: Movie) => item.id === movie.id);
        if (foundMovie) break;
        temp.push(movie);
        setWatchLaterList(temp);
        notify('Added to watch later');
        break;

      case 'remove':
        temp = watchLaterList;
        const indexToDel = temp.findIndex((item: Movie) => item.id === movie.id);
        temp.splice(indexToDel, 1);
        setWatchLaterList(temp);
        notify('Removed from watch later');
        break;

      default:
        break;
    }
  };

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterList: watchLaterList,
        addMovie: data => watchLaterHandler(data, 'add'),
        removeMovie: data => watchLaterHandler(data, 'remove')
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export default WatchLaterContextProvider;
