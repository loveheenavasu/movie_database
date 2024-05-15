
// Fetch API key and token from environment variables
const API_KEY = process.env.API_KEY;
const API_TOKEN = process.env.API_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string
  vote_average: number,
  name: string
  overview: string
}

interface WebSeries {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string
  vote_average: number,
  name: string
  overview: string
}


export enum MediaType {
  Movie = 'movie',
  TV = 'tv'
}

export interface SearchResult {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  media_type: MediaType;
}

export async function fetchPopularMovies(): Promise<Movie[]> {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}


export async function fetchTrendingMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return []; 
  }
}

export async function fetchTopRatedMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching top-rated movies:', error);
    return []; // Return an empty array in case of an error
  }
}

export async function fetchSingleMovieDetails(movieId: number): Promise<Movie | null> {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null; // Return null in case of an error
  }
}

export async function fetchWebSeries(): Promise<WebSeries[]> {
  try {
    const response = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching web series:', error);
    return []; // Return an empty array in case of an error
  }
}

export async function searchMedia(query: string, mediaType: MediaType): Promise<SearchResult[]> {
  try {
    const response = await fetch(`${BASE_URL}/search/${mediaType}?query=${query}&api_key=${API_KEY}`);
    const data = await response.json();
    return data.results.map((result: any) => ({
      id: result.id,
      title: result.title || result.name,
      poster_path: result.poster_path,
      media_type: mediaType
    }));
  } catch (error) {
    console.error(`Error searching ${mediaType}s:`, error);
    return []; // Return an empty array in case of an error
  }
}