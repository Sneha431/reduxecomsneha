import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Blog1 = () => {
  const router = useRouter();
  const pushrouter = () => {

    router.push("/blog/title3")
  }
  return (
    <div>
      <h1>  <Link href="blog/title1" replace>Title1</Link></h1>
      <h1>  <Link href="blog/title2" replace>Title2</Link></h1>
      <h1>  <Link href="blog/title3" replace>Title3</Link></h1>
      <button onClick={pushrouter}>Title3</button>
    </div>
  )
}

export default Blog1
