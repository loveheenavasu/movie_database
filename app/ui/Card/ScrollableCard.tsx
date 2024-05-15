import React from 'react'
import Image from 'next/image'
const ScrollableCard = ({movie}) => {
  console.log('movie',movie)
  return (
    <div className="flex-none w-1/4 mr-3">
      <Image className='rounded-lg w-full h-auto' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}width={500} height={300}/>
      <p className="mt-2 text-center">{movie.title}</p>
      <div className="flex row justify-center items-center gap-1">
            <span style={{ fontSize: "20px", color: "yellow" }}>&#9733;</span>
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
    </div>
  )
}

export default ScrollableCard