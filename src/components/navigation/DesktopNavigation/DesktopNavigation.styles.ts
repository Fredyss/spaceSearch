import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		primaryNav: {
			listStyleType: "none",
			marginTop: "20px",
			color: "whitesmoke",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
		},
		linkStyle: {
			textDecoration: "None",
			color: "white",
		},
		liStyle: {
			textDecoration: "none",
			padding: "0px 5px",
		},
	})
);

export default useStyles;
