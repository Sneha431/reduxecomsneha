import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex mx-auto gap-5 justify-center items-center text-xl bg-amber-100  font-medium  dark:bg-gray-600  p-4'>
      <NavbarItem title="Trending" params="fetchTrending" />
      <NavbarItem title="Top Rated" params="fetchTopRated" />
    </div>
  )
}

export default Navbar
