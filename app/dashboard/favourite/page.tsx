"use client";
import useFavoriteStore from "@/app/store/store";
import MovieCard from "@/app/ui/Card/MovieCard";
import { Col, Row } from "antd";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path : string
  vote_average : number,
  name : string
  overview: string
}

export default function Page() {
  const { favorites } = useFavoriteStore();
  return (
    <div>
      <h1>Favorite Movies</h1>
      <Row gutter={[16, 24]}>
        {favorites.map((movie) => (
          <Col className="gutter-row" span={6} key={movie.id}>
            <div>
              <MovieCard key={movie.id} movie={movie} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
