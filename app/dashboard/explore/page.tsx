import React from "react";
import MovieCard from "@/app/ui/Card/MovieCard";
import Slider from "@/app/ui/Carousel";
import { fetchPopularMovies, fetchTrendingMovies } from "@/app/actions/BaseUrl";
import { Button, Col, Row } from "antd";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path : string
  vote_average : number,
  name : string
}

export default async function Page() {
  const popularMovies = await fetchPopularMovies();
  const trendingMovies = await fetchTrendingMovies();

  return (
    <>
      <div className="lg:flex  w-full ">
        <div className="mt-8 lg:w-full  mx-5  flex xs:flex-row flex-col xs:justify-between ">
          <div className="flex w-full flex-col justify-center">
            <Slider trendingMovies={trendingMovies} />
            <div>
              <div className="text-[23px] font-semibold flex mt-3  mb-3 justify-between items-center">
                <p className="self-center">Polular Movies</p>
                <Button type="link">ViewAll</Button>
              </div>
              <Row gutter={[16, 24]}>
                {popularMovies.map((movie) => {
                  return (
                    <Col className="gutter-row" span={6} key={movie.id}>
                      <div>
                        <MovieCard movie={movie} />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <div className={`mt-5  relative top-0   `}></div>
        </div>
      </div>
    </>
  );
}
