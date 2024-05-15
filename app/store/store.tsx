import { create } from 'zustand'


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path : string
  vote_average : number,
  name : string
  overview: string
}

interface FavoriteStore {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
}

const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  addToFavorites: (movie: Movie) =>
    set((state) => ({ favorites: [...state.favorites, movie] })),
  removeFromFavorites: (id: number) =>
    set((state) => ({
      favorites: state.favorites.filter((movie) => movie.id !== id),
    })),
}));


export default useFavoriteStore;