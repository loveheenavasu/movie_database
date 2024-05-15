import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path : string
  vote_average : number,
  name : string
  overview: string
}

interface BigCardProps {
  SingleMovie: Movie;
}
const BigMovieCard: React.FC<BigCardProps> = ({ SingleMovie }) => {
  // console.log(SingleMovie, "SingleMovie");
  return (
    <>
      <div className="relative w-full">
        <div className="relative ">
          <Image
            src={`https://image.tmdb.org/t/p/original${SingleMovie?.backdrop_path}`}
            alt={SingleMovie?.title}
            width={1280}
            height={720}
            className=""
          />
          <div className="absolute top-20 left-16 p-4">
            <p className="text-[25px] text-white text-lg font-bold">{SingleMovie?.title}</p>
            {/* <p className="text-white">{movie.genre}</p> */}
            <p className="text-white text-wrap w-60 mt-1">
           {SingleMovie?.overview}
            </p>
            <Button type="primary" danger className="mt-3">
              <div className="flex justify-center items-center gap-1">
                <PlayCircleOutlined /> <span>Play</span>
              </div>
            </Button>
          </div>
          <div className="absolute inset-0 flex justify-center items-center"></div>
        </div>
      </div>
    </>
  );
};

export default BigMovieCard;
