import Link from 'next/link';
import React from 'react'

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => <li key={post.id}><Link href={`blog/posts/${post.id}`}>{post.title}</Link></li>)}


      </ul>


    </div>
  )
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts: posts.slice(0, 30)
    }
  }
}
export default Home
