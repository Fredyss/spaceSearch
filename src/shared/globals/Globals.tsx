// https://api.themoviedb.org/3/
export const API_TARGET = 'https://api.themoviedb.org/3/';

export interface MovieList {
  data: Array<Movie>;
}

export interface Movie {
  adult: false;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
