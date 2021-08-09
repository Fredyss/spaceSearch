import React from 'react';
import { Movie } from '../../shared/globals/Globals';
import { RowElement } from './RowElement';
import useStyles from './Rows.styles';

type Props = {
  type: string; //popular, top rated, etc
  data: any;
  videoHandler?: (data: Movie) => void;
};

export const Rows = ({ type, data, videoHandler }: Props) => {
  const styles = useStyles();
  return (
    <>
      {data ? (
        <React.Fragment>
          <div className={styles.divHeadStyle}>{type}</div>

          <RowElement itemData={data} videoHandler={videoHandler} />
        </React.Fragment>
      ) : (
        ''
      )}
    </>
  );
};
