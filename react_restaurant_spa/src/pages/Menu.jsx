import React from 'react'
import Layout from '../components/Layout/Layout'
import {MenuList} from "../data/data.js";
import { Box ,Card,Collapse,CardHeader,CardActionArea,CardMedia,CardActions,CardContent,Avatar,Typography} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent:"flex-start",flexWrap:"wrap" , "@media (max-width:600px)":{justifyContent:"center"}}}>
        {MenuList.map((menu) => (
       <Card sx={{ width:"300px" ,m:3 }} key={menu.id}>
       <CardHeader
         
        
       
       />
       <CardMedia
         component="img"
         height="194"
         image={menu.image}
      
         alt={menu.name}
       />
       <CardContent>
         <Typography variant="body2" color="text.secondary">
           This impressive paella is a perfect party dish and a fun meal to cook
           together with your guests. Add 1 cup of frozen peas along with the mussels,
           if you like.
         </Typography>
       </CardContent>
       <CardActions disableSpacing>
         <IconButton aria-label="add to favorites">
           <FavoriteIcon />
         </IconButton>
         <IconButton aria-label="share">
           <ShareIcon />
         </IconButton>
         
       </CardActions>
       <Collapse timeout="auto" unmountOnExit>
         <CardContent>
           <Typography paragraph>Method:</Typography>
           <Typography paragraph>
             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
             aside for 10 minutes.
           </Typography>
           <Typography paragraph>
             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
             large plate and set aside, leaving chicken and chorizo in the pan. Add
             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
             stirring often until thickened and fragrant, about 10 minutes. Add
             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
           </Typography>
           <Typography paragraph>
             Add rice and stir very gently to distribute. Top with artichokes and
             peppers, and cook without stirring, until most of the liquid is absorbed,
             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
             mussels, tucking them down into the rice, and cook again without
             stirring, until mussels have opened and rice is just tender, 5 to 7
             minutes more. (Discard any mussels that don&apos;t open.)
           </Typography>
           <Typography>
             Set aside off of the heat to let rest for 10 minutes, and then serve.
           </Typography>
         </CardContent>
       </Collapse>
     </Card>

        ))}
      </Box>
    </Layout>
  );
};


export default Menu
