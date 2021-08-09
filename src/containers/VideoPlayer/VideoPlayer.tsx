import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { getVideo } from "../../api/Movies";

type Props = {
	data: any;
};

export const Video = (props: Props) => {
	const [video, setVideo] = useState("");

	useEffect(() => {
		async function fetchData() {
			getVideo(props.data.id, async (response) => {
				const res = await response;
				if (res.data.results[0]) setVideo(res.data.results[0].key);
				return res;
			});
		}

		if (props.data.id) {
			fetchData();
		}
	}, [props.data]);

	return (
		<React.Fragment>
			{video ? <ReactPlayer url={"https://youtube.com/watch?v=" + video} className="react-player" playing width="100%" /> : <></>}
		</React.Fragment>
	);
};

export default Video;
