import {
  fetchSingleMovieDetails,
  fetchTopRatedMovies,
} from "@/app/actions/BaseUrl";
import BigMovieCard from "@/app/ui/Card/BigMovieCard";
import ScrollableCard from "@/app/ui/Card/ScrollableCard";
import { Button } from "antd";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  name: string;
  overview: string;
}
export default async function Page() {
  const SingleMovie = await fetchSingleMovieDetails(1058694);
  const topRatedMovies = await fetchTopRatedMovies();

  return (
    <>
      {SingleMovie && (
        <div className="flex justify-center items-center">
          <BigMovieCard SingleMovie={SingleMovie} />
        </div>
      )}

      <div className="text-[23px] font-semibold flex mt-3 mb-3 justify-between items-center">
        <p className="self-center">Top Rated Movies</p>
        <Button type="link">ViewAll</Button>
      </div>
      <div className="flex overflow-x-auto hide-scroll-bar">
        {topRatedMovies.map((movie) => (
          <ScrollableCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
