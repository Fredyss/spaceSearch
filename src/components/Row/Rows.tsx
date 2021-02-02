import React from 'react';
import { Movie } from '../../shared/globals/Globals';
import { RowElement } from './RowElement';

const divHeadStyle = {
  color: 'whitesmoke',
  padding: '8px',
};

type Props = {
  type: string; //popular, top rated, etc
  data: any;
  videoHandler?: (data: Movie) => void;
};

export const Rows = (props: Props) => {
  return (
    <div>
      {props.data ? (
        <React.Fragment>
          <div style={divHeadStyle}>{props.type}</div>

          <RowElement itemData={props.data} videoHandler={props.videoHandler}/>
        </React.Fragment>
      ) : (
        ''
      )}
    </div>
  );
};
