import { Badge, Divider, Hidden, IconButton, Toolbar, Typography } from "@mui/material";
import { withStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideDrawer from "./SideDrawer.jsx";

// const useStyles = withStyles((theme) => ({
// title: {
//   flexGrow: 1
// },
// tagline: {
//   fontSize: 20,
//   textTransform: "uppercase",
//   justifyContent: "center",
//   fontFamily: "Montserrat"
// }
// }));
const Header = withStyles({
  title: {
    flexGrow: 1
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat"
  },
})(({ classes }) => (
  <>
    <Toolbar>
      <Hidden mdUp>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
      </Hidden>
      <Typography variant="h6" className={classes.title}>
        Blogging Website
      </Typography>
      <IconButton color="inherit"><NotificationsIcon /></IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <AccountCircleIcon />
        </Badge>
      </IconButton>
    </Toolbar>
    <Divider />
    <Toolbar className={classes.tagline}>Express your feelings</Toolbar>
  </>
));
// const Header = () => {


//   return (
//     <>
//       <Toolbar>
//         <IconButton color="inherit"><MenuIcon /></IconButton>
//         <Typography variant="h6" className={classes.title}>
//           Blogging Website
//         </Typography>
//         <IconButton color="inherit"><NotificationsIcon /></IconButton>
//         <IconButton color="inherit">
//           <Badge badgeContent={4} color="secondary">
//             <AccountCircleIcon />
//           </Badge>
//         </IconButton>
//       </Toolbar>
//       <Divider />
//       <Toolbar className={classes.tagline}>Express your feelings</Toolbar>
//     </>
//   );
// };

export default Header;
