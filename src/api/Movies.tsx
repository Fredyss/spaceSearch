import axios from 'axios';
import { API_TARGET } from '../shared/globals/Globals';

type onSuccess = (response: any) => any;

export const getTopRatedMovies = async (onSuccess: onSuccess) => {
  const url = API_TARGET + 'movie/top_rated';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: '3c2ed41b06d4840aba600b50dcb864a7',
    },
  };

  try {
    const data = await axios.get(url, config);
    onSuccess(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMovies = async (onSuccess: onSuccess) => {
  const url = API_TARGET + 'movie/popular';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: '3c2ed41b06d4840aba600b50dcb864a7',
    },
  };

  try {
    const data = await axios.get(url, config);
    onSuccess(data);
  } catch (error) {
    console.log(error);
  }
};

export const getUpcomingMovies = async (onSuccess: onSuccess) => {
  const url = API_TARGET + 'movie/upcoming';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: '3c2ed41b06d4840aba600b50dcb864a7',
    },
  };

  try {
    const data = await axios.get(url, config);
    onSuccess(data);
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (param: string, onSuccess: onSuccess) => {
  const url = API_TARGET + 'search/movie';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: '3c2ed41b06d4840aba600b50dcb864a7',
      language: 'en-US',
      query: param,
    },
  };

  try {
    const data = await axios.get(url, config);
    onSuccess(data);
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

export const getVideo = async (movieId: string, onSuccess: onSuccess) => {
  const url = API_TARGET + 'movie/' + movieId + '/videos';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      api_key: '3c2ed41b06d4840aba600b50dcb864a7',
      language: 'en-US',
    },
  };

  try {
    const data = await axios.get(url, config);
    onSuccess(data);
  } catch (error) {
    console.log(error);
  }
};
