import React, { useContext } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { SearchContext } from "../../context/search-context";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

import useStyles from "./navigation.styles";

export const Navigation = () => {
	const theme = useTheme();
	const searchContext = useContext(SearchContext);
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
	const styles = useStyles();

	return (
		<div className={styles.navigation}>
			{!matches ? <MobileNavigation /> : <DesktopNavigation />}

			<input
				id="searchBox"
				className={styles.inputSearch}
				placeholder="Search movies..."
				onChange={(event) => setTimeout(() => searchContext.searchHandle(event.target.value), 1000)}
			/>
		</div>
	);
};
