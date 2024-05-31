import { useRouter } from "next/router";



const singlepost = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading data..</h1>
  }

  return (
    <div>
      <ul>
        <li>#{post.id}</li>
        <li>#useridd: {post.userId}</li>
        <li>#title: {post.title}</li>
        <li>#body: {post.body}</li></ul>
    </div >
  )
}
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paths = posts.slice(0, 30).map((post) => {
    return {
      params: {
        post_id: post.id.toString()
      }
    }
  })

  return {

    paths: paths,
    // fallback: true,
    fallback: "blocking",//no loading fetch direct dataa and add json and html to build
  }
}
export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
  const post = await response.json();
  return {
    props: {
      post
    }
  }
}



export default singlepost
