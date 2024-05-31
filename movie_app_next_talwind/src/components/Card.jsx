
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ result }) => {
  return (
    <div className='rounded-lg border border-gray-400 px-4 pt-4 pb-2'>
      <Link href={`/movie/${result.id}`}>
        <Image

          alt={result.id}
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path
            }`}
          width={500}
          height={300}
          className="rounded-lg"

        />
        <div className='flex flex-col gap-1 px-2'>
          <p className='line-clamp-2 my-1'>{result.overview}</p>
          <h2 className='line-clamp-1 text-lg font-bold'>
            {result.title || result.name}
          </h2>
          <p className='flex gap-2 items-center'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
