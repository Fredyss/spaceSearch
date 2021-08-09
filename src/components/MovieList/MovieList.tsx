import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Movie } from '../../shared/globals/Globals';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import useStyles from './MovieList.styles';


type Props = {
  data: Array<Movie>;
  videoHandler?: (data: Movie) => void;
  movieHandler: (data: Movie, type: string) => void;
};

export const MovieList = (props: Props) => {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {props.data.map((value: Movie, key: number) => {
        const imgPath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + value.poster_path;

        return (
          <div className={classes.div}>
            <ListItem
              className={classes.item}
              key={key + Math.floor(Math.random() * 1000) + 1}
              button
              onClick={() => {
                if (props.videoHandler) {
                  props.videoHandler(value);
                }
              }}
            >
              <img src={imgPath} alt={value.title} />

              <section className={classes.section}>
                <h3>{value.title}</h3>
                <div>{value.overview}</div>
                <br />
                Voting average {value.vote_average} of 10
              </section>
            </ListItem>
            <div className={classes.actions}>
              <Button
                onClick={() => {
                  props.movieHandler(value, 'watchLater');
                }}
                variant='contained'
                color='secondary'
                startIcon={<DeleteIcon />}
              ></Button>
              <Button
                onClick={() => {
                  props.movieHandler(value, 'favourites');
                }}
                variant='contained'
                color='primary'
                startIcon={<StarIcon />}
              ></Button>
            </div>
          </div>
        );
      })}
    </List>
  );
};
