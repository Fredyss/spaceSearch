import React from 'react';
import { Movie, MovieList } from '../../shared/globals/Globals';
import { RowItem } from '../Row/RowItem/RowItem';
import useStyles from './MovieGrid.styles';

export const MovieGrid = (props: MovieList) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {props.data.map((item: Movie, key: number) => (
        <RowItem key={key} data={item} />
      ))}
    </div>
  );
};
