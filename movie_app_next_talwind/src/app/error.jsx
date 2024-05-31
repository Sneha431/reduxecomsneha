"use client"

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button onClick={() => reset()} className="hover:text-amber-500">
        Try Again
      </button>
    </div>
  )
}

export default Error
