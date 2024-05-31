import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center'>
      <Image src="/spinner.svg" alt="Loading.." className='h-52' width={500}
        height={300} />
    </div>
  )
}

export default Loading
