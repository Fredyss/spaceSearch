import React, { useState } from 'react';
import { notify } from '../shared/globals/GlobalFunctions';
import { Movie } from '../shared/globals/Globals';

export const FavouritesContext = React.createContext({
  favourites: [],
  addMovie: (movie: any) => movie,
  removeMovie: (movie: any) => movie,
});

interface props {
  children: any;
}
const FavouritesContextProvider = (props: props) => {
  const [favourites, setFavourites] = useState([]);

  const favouritesHandler = (movie: Movie, action: string) => {
    let temp = [] as any;
    switch (action) {
      case 'add':
        temp = favourites;
        const foundMovie = temp.find((item: Movie) => item.id === movie.id);
        if (foundMovie) break;
        temp.push(movie);
        setFavourites(temp);
        notify('Added to favourites');
        break;

      case 'remove':
        temp = favourites;
        const indexToDel = temp.findIndex(
          (item: Movie) => item.id === movie.id
        );
        temp.splice(indexToDel, 1);
        setFavourites(temp);
        notify('Removed from favourites');
        break;

      default:
        break;
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addMovie: (data) => favouritesHandler(data, 'add'),
        removeMovie: (data) => favouritesHandler(data, 'remove'),
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
