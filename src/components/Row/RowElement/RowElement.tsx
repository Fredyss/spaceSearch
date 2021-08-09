import React from "react";
import { Movie } from "../../../shared/globals/Globals";
import { RowItem } from "../RowItem/RowItem";
import useStyles from "./RowElement.styles";

type RowElementProps = {
	itemData: Array<Movie>;
	videoHandler?: (data: Movie) => void;
};

export const RowElement = ({ itemData, videoHandler }: RowElementProps): JSX.Element => {
	const styles = useStyles();
	return (
		<section className={styles.rowElement}>
			{itemData.map((item: Movie, key: number) => (
				<div
					key={key}
					onClick={() => {
						if (videoHandler) {
							videoHandler(item);
						}
					}}
				>
					<RowItem data={item} />
				</div>
			))}
		</section>
	);
};
