'use client'
import React from "react";
import { Card, Tooltip } from "antd";
import Image from "next/image";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import useFavoriteStore from "@/app/store/store";
// const { Meta } = Card;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path : string
  vote_average : number,
  name : string
}

export interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, poster_path, vote_average, name } = movie;
  const { favorites, addToFavorites, removeFromFavorites } = useFavoriteStore();
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="relative">
      <Card
        hoverable
        className="movie-card"
        cover={
          <Image
            style={{ width: "100%", height: "auto" }}
            width={300}
            height={300}
            alt="example"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        }
      >
        <div className="absolute top-0 right-0 p-2">
          <Tooltip
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            placement="top"
          >
            {isFavorite ? (
              <HeartFilled
              twoToneColor='#FF0000'
              // style={{backgroundColor : 'red'}}
                onClick={handleToggleFavorite}
                className="text-red-500 text-xl cursor-pointer"
              />
            ) : (
              <HeartOutlined
              style={{color : 'blue' }}
                onClick={handleToggleFavorite}
                className=" text-xl cursor-pointer"
              />
            )}{" "}
          </Tooltip>
        </div>
        <div className="flex justify-between items-center helloworld">
          <h6 className="text-[15px]">{title || name}</h6>
          <div className="flex row justify-center items-center gap-1">
            <span style={{ fontSize: "20px", color: "yellow" }}>&#9733;</span>
            <span>{vote_average.toFixed(1)}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
