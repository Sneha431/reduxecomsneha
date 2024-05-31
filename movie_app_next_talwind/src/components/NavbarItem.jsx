'use client';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NavbarItem = ({ title, params }) => {
  const searchparams = useSearchParams();
  const genre = searchparams.get("genre");

  return (
    <div className=''>
      <Link href={`/?genre=${params}`} className={`hover:text-amber-600 ${genre === params ? 'underline  underline-offset-8 decoration-amber-500 decoration-4 rounded-lg' : "s"}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
