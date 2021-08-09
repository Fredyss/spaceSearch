import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { getVideo } from "../../api/Movies";
import { Movie } from "../../shared/globals/Globals";

type VideoProps = {
	data: Movie;
};

export const Video = ({ data }: VideoProps): JSX.Element => {
	const [video, setVideo] = useState("");

	console.log(data);
	useEffect(() => {
		async function fetchData() {
			getVideo(String(data.id), async (response) => {
				const res = await response;
				if (res.data.results[0]) setVideo(res.data.results[0].key);
				return res;
			});
		}

		if (data.id) {
			fetchData();
		}
	}, [data]);

	return (
		<React.Fragment>
			{video ? <ReactPlayer url={"https://youtube.com/watch?v=" + video} className="react-player" playing width="100%" /> : <></>}
		</React.Fragment>
	);
};

export default Video;
