import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='hover:text-amber-500 '>
      <Icon className="text-2xl sm:hidden text-inherit" />
      <p className="uppercase hidden sm:inline">{title}</p></Link>
  )
}

export default MenuItem
