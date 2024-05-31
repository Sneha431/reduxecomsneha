"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Darkmodeswitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setmounted(true)
  }, [])


  return (
    <div>
      {mounted && currentTheme === "dark" ? <MdLightMode onClick={() => setTheme("light")} className='text-xl cursor-pointer hover:text-amber-500' /> : <MdDarkMode onClick={() => setTheme("dark")} className='text-xl cursor-pointer hover:text-amber-500' />}
      <span></span>
    </div>
  )
}

export default Darkmodeswitch
