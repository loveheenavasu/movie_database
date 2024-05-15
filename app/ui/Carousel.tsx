import React from "react";
import { Carousel } from "antd";
import { FireOutlined } from "@ant-design/icons";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "500px",
};
interface Movie {
  id: number;
  backdrop_path : string
}
interface ExplorePageProps {
  trendingMovies: Movie[];
}


const Slider:React.FC<ExplorePageProps>= ({  trendingMovies }) => {
  console.log(trendingMovies, "trendingMovies");
  return (
    <>
      <div className="en mr-1">
        <p className="text-[23px] font-semibold mb-2  flex ">
          Trending Movie
          <span className="self-center text-[20px] mx-1 ">
            <FireOutlined />
          </span>
        </p>
        <Carousel arrows infinite={false} >
          {trendingMovies.map((trend) => {
            return (
              <div className="rounded-lg" key={trend.id}>
                <div style={contentStyle}>
                  <Image
                    //  style={{  height: "auto", objectFit:'cover' }}
                    width={1280}
                    height={720}
                    alt="example"
                     src={`https://image.tmdb.org/t/p/w1280${trend.backdrop_path}`} 
                  />
                  
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
