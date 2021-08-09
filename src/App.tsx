import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/navigation";

import FavouritesContextProvider from "./context/favourites-context";
import SearchContextProvider from "./context/search-context";
import WatchLaterContextProvider from "./context/watchLater-context";
import { Routes } from "./Routes";

const divStyle = {
	backgroundColor: "black",
};

const App = () => {
	return (
		<BrowserRouter>
			<div style={divStyle}>
				<SearchContextProvider>
					<WatchLaterContextProvider>
						<FavouritesContextProvider>
							<Navigation />
							{Routes}
						</FavouritesContextProvider>
					</WatchLaterContextProvider>
				</SearchContextProvider>
			</div>
			<ToastContainer />
		</BrowserRouter>
	);
};

export default App;
