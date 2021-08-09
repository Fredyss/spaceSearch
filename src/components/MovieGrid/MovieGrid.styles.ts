import { createStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      margin: '2px',
      gridTemplateColumns: 'repeat(auto-fill, 210px)'
    }
  })
);

export default useStyles;
