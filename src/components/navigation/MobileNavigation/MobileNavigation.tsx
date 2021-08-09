import React, { useState, MouseEvent } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./MobileNavigation.styles";

export const MobileNavigation = (): JSX.Element => {
	const styles = useStyles();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget);
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button style={{ color: "whitesmoke" }} aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
				<MenuIcon />
			</Button>
			<Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={handleClose}>
					<Link to="/home" className={styles.linkStyleMobile}>
						Home
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to="/favourites" className={styles.linkStyleMobile}>
						Favourites
					</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to="/watch-later" className={styles.linkStyleMobile}>
						Watch later
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};
