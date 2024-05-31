import React from 'react'
import Card from './Card'

const Results = ({ results }) => {
  return (
    <div className='mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-4 gap-3'>
      {results.map((result) => <Card key={result.id} result={result} />)}
    </div>
  )
}

export default Results
