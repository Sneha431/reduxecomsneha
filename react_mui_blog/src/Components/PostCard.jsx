import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Hidden, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles({
  carddiv: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: "150px !important",
  },
});
const PostCard = ({ post }) => {
  const classes = useStyles();
  return (
    <Grid item md={6} xs={12} >
      <CardActionArea component="a" href="#">
        <Card className={classes.carddiv} >
          <div className={classes.cardDetails}> <CardContent>
            <Typography component="h2" variant="h5">{post.title}</Typography>
            <Typography paragraph variant="subtitle1" >{post.description}</Typography>
            <Typography paragraph variant="subtitle2" color="textSecondary">{post.date}</Typography>
            <Typography component="span" variant="subtitle1" color="skyblue">Continue Reading...</Typography>
          </CardContent>
          </div>

          <Hidden mdDown>
            <CardMedia component="img"
              className={classes.cardMedia}

              image={post.image}
              alt={post.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default PostCard
