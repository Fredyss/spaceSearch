import React from 'react';
import { Movie, MovieList } from '../../shared/globals/Globals';
import { RowItem } from '../Row/RowItem/RowItem';

const divStyle = {
  display: 'grid',
  margin: '2px',
  gridTemplateColumns: 'repeat(auto-fill, 210px)'
};

export const MovieGrid = (props: MovieList) => {
  return (
    <div style={divStyle}>
      {props.data.map((item: Movie, key: number) => (
        <RowItem key={key} data={item} />
      ))}
    </div>
  );
};
