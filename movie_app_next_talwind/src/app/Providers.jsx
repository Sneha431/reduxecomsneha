"use client"

import { ThemeProvider } from "next-themes"


const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-700">  {children}</div>

    </ThemeProvider>
  )
}

export default Providers
