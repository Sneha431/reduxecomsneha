import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import logo from "../../images/logo.svg";
const Header = () => {
const[handleopen,setHandleopen]=useState(false);

  const handleclick = () =>{
    setHandleopen(!handleopen);
  }
  const drawer = (
      <Box onClick={handleclick} sx={{display:{xs:"block"},boxSizing:"border-box",width:"165px"}} >

  <Typography color={'goldenrod'} component={"div"} variant='h6' sx={{ flexGrow:1 }} className='headicon'>
         <FastfoodIcon/>
         <img src={logo} alt="logo" height="50vh" className='logoimg'/>
       
       </Typography>
     <Divider/>
   
   <ul className='mobile-navigation'>
       <li><Link to={"/"}>Home</Link></li>
       <li><Link to={"/menu"}>Menu</Link></li>
       <li><Link to={"/about"}>About</Link></li>
       <li><Link to={"/contact"}>Contact</Link></li>
     </ul>
        </Box>
       
   
    )
  
  return (
    <>
<Box>
  <AppBar component={"nav"} sx={{bgcolor:"black"}} >
    <Toolbar>  
      <IconButton color="inherit" sx={{display:{sm:"none"}}} edge="start" aria-label='open-drawer' onClick={handleclick}>
        <MenuIcon />
      </IconButton>
      <Typography color={'goldenrod'} component={"div"} variant='h6' sx={{ flexGrow:1 }} className='headicon'>
      <FastfoodIcon/>
      <img src={logo} alt="logo" height="50vh" className='logoimg'/>
    </Typography>
    <Box sx={{ mr:2,display: { xs: "none", sm: "block" } }} >

<ul className='navigation-menu'>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/menu"}>Menu</Link></li>
    <li><Link to={"/about"}>About</Link></li>
    <li><Link to={"/contact"}>Contact</Link></li>
  </ul>

  
</Box>
    </Toolbar>
  
  </AppBar>
  <Box component="nav">
<Drawer  variant="temporary"
          open={handleopen} onClose={handleclick} sx={{display:{xs:"block", sm:"none"}}}>
{drawer}
</Drawer>
  </Box>
  <Box>
    <Toolbar/>
  </Box>
</Box>

    </>
  )
}

export default Header
