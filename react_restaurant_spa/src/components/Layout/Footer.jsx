import {  } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:"white",p:3}}>
      <Box sx={{my:3 , "& svg":{fontSize:"60px",cursor:"pointer"},"& svg:hover":{color:'goldenrod',transform:"translateX(5px)",transition:"all 400ms"}}}>
        <InstagramIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
        <YouTubeIcon/>
      </Box>
      <Typography variant='h5' sx={{"@media(max-width:600px)":{fontSize:"1rem"}}}>
  All Rights Reserved &copy; SG
      </Typography>
      
    </Box>
  )
}

export default Footer
