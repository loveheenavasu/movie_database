import { fetchWebSeries } from "@/app/actions/BaseUrl";
import MovieCard from "@/app/ui/Card/MovieCard";
import { Col, Row } from "antd";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path : string
  vote_average : number,
  name : string
}

export default async function Page() {
  const Webseries = await fetchWebSeries();

  return (
    <div>
      <Row gutter={[16, 24]}>
        {Webseries.map((series) => (
          <Col className="gutter-row" span={6} key={series.id}>
            <div>
              <MovieCard movie={series} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
