import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    playerStyle: {
      width: '100%',
      minHeight: '480px',
      maxHeight: '720px'
    }
  })
);

export default useStyles;
