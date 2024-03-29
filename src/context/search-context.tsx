import React, { ReactNode, useEffect, useState } from "react";
import { searchMovie } from "../api/Movies";

export const SearchContext = React.createContext({
	searchedValue: "",
	searchHandle: (event: any) => event,
	result: [],
});

interface props {
	children: ReactNode;
}

const SearchContextProvider = ({ children }: props) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		if (searchValue !== "") {
			searchMovie(searchValue, async (response) => {
				const res = await response;
				setSearchResult(res.data.results);
				return res;
			});
		} else {
			setSearchResult([]);
		}
	}, [searchValue]);

	const searchHandler = (value: string) => {
		setSearchValue(value);
	};

	return (
		<SearchContext.Provider
			value={{
				searchedValue: searchValue,
				searchHandle: (value) => searchHandler(value),
				result: searchResult,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;
