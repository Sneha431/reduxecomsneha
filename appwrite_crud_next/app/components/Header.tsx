import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full border-b bg-blue-500 rounded-bl-lg rounded-br-lg p-2'>
      <header className='max-w-2xl flex justify-between mx-auto p-3 bg-gray-600 rounded-lg text-slate-50 shadow-md shadow-slate-500 border-[0.3px]  border-slate-50 items-center'>
        <Link href="/" className='font-bold text-lg'>TechSneha</Link>
        <Link href="/create" className='font-bold text-sm bg-slate-50 rounded-full text-gray-700 px-3 py-2'>Add New</Link>
      </header>
    </div>
  )
}

export default Header
