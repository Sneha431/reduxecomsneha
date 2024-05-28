import { Container, Grid } from "@mui/material"
import Header from "./Components/Header"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { featuredPosts, sidebar } from "./Data/data.js"
import FeaturedPost from "./Components/FeaturedPost";
import PostCard from "./Components/PostCard.jsx"
import Main from "./Components/Main.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Footer from "./Components/Footer.jsx";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// const useStyles = makeStyles({
//   mainGrid: {
//     marginTop: spacing(3),
//   },
// });

const App = () => {
  // const classes = useStyles();
  return (

    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Header />
        <FeaturedPost />
        <Grid container spacing="9px" marginTop="10px">
          {featuredPosts.map((post) => <PostCard key={post.title} post={post} />)}
        </Grid>
        <Grid container spacing="10px" marginTop="10px">
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>

  )
}

export default App
