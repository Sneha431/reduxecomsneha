'use client';
import { useRouter } from 'next/navigation';
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handlesubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`)
  }
  return (
    <form className="flex flex-row justify-between max-w-6xl mx-auto p-5" onSubmit={handlesubmit}>
      <input
        type='text'
        placeholder='Search keywords...'
        onChange={(e) => setSearch(e.target.value)}
        className="bg-inherit text-sm font-light placeholder-gray-500 outline-none"
      />
      <button

        className="text-gray-400 text-md"
      >
        Search
      </button>
    </form>

  )
}

export default SearchBox
