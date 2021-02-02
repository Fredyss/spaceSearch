import React, { useContext } from 'react';
import styles from './RowItem.module.css';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { FavouritesContext } from '../../../context/favourites-context';
import { WatchLaterContext } from '../../../context/watchLater-context';
import { Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

type Props = {
  data: any;
};

export const RowItem = (props: Props) => {
  const favouritesContext = useContext(FavouritesContext);
  const watchLaterContext = useContext(WatchLaterContext);

  const imgPath =
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + props.data.poster_path;

  return (
    <div className={styles.rowItem}>
      {props.data.poster_path ? (
        <img src={imgPath} alt={props.data.title}></img>
      ) : (
        <div className={styles.noImgsDivStyle}>{props.data.title}</div>
      )}

      <div className={styles.actionBarStyle} id='controls'>
        <Button
          variant="contained"
          color="primary"
          onClick={() => favouritesContext.addMovie(props.data)}
          startIcon={<StarIcon />}
        ></Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => watchLaterContext.addMovie(props.data)}
          startIcon={<WatchLaterIcon />}
        ></Button>
      </div>
    </div>
  );
};
