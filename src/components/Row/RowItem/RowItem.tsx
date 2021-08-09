import React, { useContext } from "react";
import styles from "./RowItem.module.css";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { FavouritesContext } from "../../../context/favourites-context";
import { WatchLaterContext } from "../../../context/watchLater-context";
import { Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { Movie } from "../../../shared/globals/Globals";

type Props = {
	data: Movie;
};

export const RowItem = ({ data }: Props) => {
	const favouritesContext = useContext(FavouritesContext);
	const watchLaterContext = useContext(WatchLaterContext);

	const imgPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + data.poster_path;

	return (
		<div className={styles.rowItem}>
			{data.poster_path ? <img src={imgPath} alt={data.title}></img> : <div className={styles.noImgsDivStyle}>{data.title}</div>}

			<div className={styles.actionBarStyle} id="controls">
				<Button
					variant="contained"
					color="primary"
					onClick={() => favouritesContext.addMovie(data)}
					startIcon={<StarIcon />}
				></Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => watchLaterContext.addMovie(data)}
					startIcon={<WatchLaterIcon />}
				></Button>
			</div>
		</div>
	);
};
