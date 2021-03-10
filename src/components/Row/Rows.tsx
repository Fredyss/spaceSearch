import React from 'react';
import { Movie } from '../../shared/globals/Globals';
import { RowElement } from './RowElement';

const divHeadStyle = {
  color: 'whitesmoke',
  padding: '8px'
};

type Props = {
  type: string; //popular, top rated, etc
  data: any;
  videoHandler?: (data: Movie) => void;
};

export const Rows = ({ type, data, videoHandler }: Props) => {
  return (
    <div>
      {data ? (
        <React.Fragment>
          <div style={divHeadStyle}>{type}</div>

          <RowElement itemData={data} videoHandler={videoHandler} />
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
};
