import { Button, CardActions, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { withStyles, makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';

const useStyles = makeStyles({
  title: {
    fontSize: [40, '!important'], // Use an array for responsive font size, 'inherit' to avoid !important
    color: 'green',
    fontFamily: 'Montserrat'
  },
  cardcontainer: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max) !important`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '35px 25px'
  }
});
// const FeaturedPost = withStyles({
//   title: {
//     fontSize: [40, 'inherit'],
//     color: 'green',
//     fontFamily: 'Montserrat'
//   },
//   cardcontainer: {
//     backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     padding: '35px 25px'
//   }
// })(({ classes }) => (<Card className={classes.cardcontainer}>
//   <CardContent>
//     <Typography className={classes.title}>
//       Lorem ipsum
//     </Typography>
//     <Typography variant='h5'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores deserunt optio repellat nesciunt praesentium tempora vero eveniet? Earum cumque optio, aliquid quas odit voluptatem ipsam a hic culpa iure?
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button variant='text'>Read More...</Button>
//   </CardActions>
// </Card>))



const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cardcontainer} >
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Lorem ipsum
        </Typography>
        <Typography variant='h5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa maiores deserunt optio repellat nesciunt praesentium tempora vero eveniet? Earum cumque optio, aliquid quas odit voluptatem ipsam a hic culpa iure?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='text'>Read More...</Button>
      </CardActions>
    </Card >
  );
};

export default FeaturedPost;
