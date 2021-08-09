import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		rowElement: {
			display: "flex",
			overflow: "auto",
			margin: "0rem 2rem",
			padding: "18px 5px",
		},
	})
);

export default useStyles;
