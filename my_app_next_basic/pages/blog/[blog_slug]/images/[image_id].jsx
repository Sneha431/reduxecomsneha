import { useRouter } from "next/router"


const image = () => {
  const { query } = useRouter();
  console.log(query)
  return (
    <div>
      This image id is {query.image_id} slug is {query.blog_slug}
    </div>
  )
}

export default image
