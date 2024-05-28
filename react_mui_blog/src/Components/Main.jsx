import { Divider, Grid, Typography } from "@mui/material"
import Markdown from "markdown-to-jsx";
import { posts } from "../Data/data";
//const markdownText = `
//   # Hello, Markdown!

//   This is a **Markdown** document rendered using React.

//   - Item 1
//   - Item 2
//   - Item 3

//   [Link to Google](https://www.google.com)
//   `;

const Main = ({ title }) => {

  return (
    <Grid item xs={12} md={8} >
      <Typography variant="h6">{title}</Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  )
}

export default Main
