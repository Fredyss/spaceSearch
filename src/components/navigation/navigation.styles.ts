import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    navigation: {
      display: "grid",
      gridTemplateColumns: "60% 40%",
      height: "50px",
      backgroundColor: "black",
    },
    mobileNavigation: {

    },
    inputSearch: {
      border: "4px solid smokewhite",
      backgroundColor: "black",
      minWidth: "80px",
      width: "80%",
      color: "white",
      borderRadius: "4px",
      margin: "10px"
    }
  })
);

export default useStyles;
