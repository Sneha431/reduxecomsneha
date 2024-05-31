import Image from 'next/image';
import React from 'react'

const SingleMovie = async ({ params }) => {
  const movieId = params.movie_id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const result = await res.json();

  return (
    // <div className='grid sm:grid-cols-1 lg:grid-cols-2 p-4'>

    //   <Image alt={result.original_title || result.title} src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
    //     }`}
    //     width={500}
    //     height={300} className='rounded-lg mx-auto w-[100%] h-[100%] max-w-md' />
    //   <div className='px-10'>
    //     <h1>{result.original_title || result.title}</h1>
    //     <p><span>Overview</span><span>{result.overview}</span></p>
    //     <p><span>Date Released</span><span>{result.release_date || result.first_air_date}</span></p>
    //     <p><span>Rating</span><span>{result.vote_average}</span></p>
    //   </div>
    // </div>
    <div className='flex flex-col md:flex-row justify-center items-center p-4 mx-auto max-w-6xl '>

      <Image alt={result.original_title || result.title} src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
        }`}
        width={500}
        height={300} className='rounded-lg mx-auto w-[100%] h-[100%] max-w-md' />
      <div className='px-10 space-y-3'>
        <h2 className='text-lg mb-3 font-bold'>
          {result.title || result.name}
        </h2>
        <p className='text-lg mb-3'>{result.overview}</p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Date Released:</span>
          {result.release_date || result.first_air_date}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Rating:</span>
          {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default SingleMovie
