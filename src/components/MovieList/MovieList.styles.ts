import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		div: {
			display: "flex",
			flexDirection: "row",
			borderTop: "1px solid gray",
			borderBottom: "1px solid gray",
			borderRadius: "3px",
		},
		root: {
			width: "100%",
			color: "whitesmoke",
			backgroundColor: "black",
		},
		item: {
			margin: "8px",
		},
		section: {
			margin: "0 5px",
		},
		actions: {
			display: "flex",
			flexDirection: "column",
			margin: "0",
			padding: "0",
		},
		button: {
			height: "24px",
			width: "24px",
		},
	})
);

export default useStyles;
