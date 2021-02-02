import React from 'react';
import { Movie } from '../../shared/globals/Globals';
import { RowItem } from './RowItem/RowItem';

const divStyle = {
  display: 'flex',
  overflow: 'auto',
  margin: '0rem 2rem',
  padding: '18px 5px',
};

type Props = {
  itemData: any;
  videoHandler?: (data: Movie) => void;
};

export const RowElement = (props: Props) => {
  return (
    <section style={divStyle}>
      {props.itemData.map((item: any, key: number) => (
        <div key={key} onClick={() =>{
          if(props.videoHandler) {
            props.videoHandler(item)
         }
        } }>
          <RowItem data={item} />
        </div>
      ))}
    </section>
  );
};
