import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import "../styles/AboutStyle.css"
const About = () => {
  return (
    <Layout>
      <Box sx={{textAlign:"center", backgroundColor: "#daa5202e",  paddingTop: "12px","& h4":{fontWeight:"bold"},"& p":{fontWeight:"light",textAlign:"justify"},"@media (max-width:600px)":{my:1,fontSize: "20px","& h4":{fontSize:"24px"}}}}>
        <Typography sx={{fontWeight:400,fontSize:"20px",textAlign:"center" , my:2}} variant='h4'>
Welcome to my restaurant
        </Typography>
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
        <p className='abouttext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem, dolor minus provident ullam rerum nostrum fugit alias numquam, doloremque dignissimos suscipit? Veniam facilis sequi corporis modi voluptatibus. Soluta, unde.
        Commodi exercitationem omnis laudantium blanditiis totam tenetur aliquam officia perspiciatis atque aspernatur nesciunt, adipisci cum quis fugit vitae minus veniam! Beatae cum quod eum quae, consectetur eius reprehenderit incidunt dolore!
        Esse neque exercitationem ipsam dignissimos, dolor fugit magni placeat porro possimus. Facere, atque. Ea, debitis quam nisi distinctio expedita perferendis iure cupiditate sed eveniet rem numquam similique illum facilis! Quis.</p>
        <p className='abouttext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem, dolor minus provident ullam rerum nostrum fugit alias numquam, doloremque dignissimos suscipit? Veniam facilis sequi corporis modi voluptatibus. Soluta, unde.
        Commodi exercitationem omnis laudantium blanditiis totam tenetur aliquam officia perspiciatis atque aspernatur nesciunt, adipisci cum quis fugit vitae minus veniam! Beatae cum quod eum quae, consectetur eius reprehenderit incidunt dolore!
        Esse neque exercitationem ipsam dignissimos, dolor fugit magni placeat porro possimus. Facere, atque. Ea, debitis quam nisi distinctio expedita perferendis iure cupiditate sed eveniet rem numquam similique illum facilis! Quis.</p>
        <p className='abouttext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem, dolor minus provident ullam rerum nostrum fugit alias numquam, doloremque dignissimos suscipit? Veniam facilis sequi corporis modi voluptatibus. Soluta, unde.
        Commodi exercitationem omnis laudantium blanditiis totam tenetur aliquam officia perspiciatis atque aspernatur nesciunt, adipisci cum quis fugit vitae minus veniam! Beatae cum quod eum quae, consectetur eius reprehenderit incidunt dolore!
        Esse neque exercitationem ipsam dignissimos, dolor fugit magni placeat porro possimus. Facere, atque. Ea, debitis quam nisi distinctio expedita perferendis iure cupiditate sed eveniet rem numquam similique illum facilis! Quis.</p>
     
        </Box>
      
      
      </Box>
    </Layout>
  )
}

export default About
