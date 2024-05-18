import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:0,mb:0,textAlign:"center",backgroundColor:"#daa5202e",  padding: "12px","& h4":{fontWeight:"bold"},"& p":{fontWeight:"light",textAlign:"justify"},"@media (max-width:600px)":{my:0,fontSize: "20px","& h4":{fontSize:"24px"}}}}>
        <Typography sx={{fontWeight:400,fontSize:"20px",textAlign:"center" , my:2}} variant='h4'>
Contact Us
        </Typography>
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
        <p className='abouttext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem, dolor minus provident ullam rerum nostrum fugit alias numquam, doloremque dignissimos suscipit? Veniam facilis sequi corporis modi voluptatibus. Soluta, unde.
        Commodi exercitationem omnis laudantium blanditiis totam tenetur aliquam officia perspiciatis atque aspernatur nesciunt, adipisci cum quis fugit vitae minus veniam! Beatae cum quod eum quae, consectetur eius reprehenderit incidunt dolore!
        Esse neque exercitationem ipsam dignissimos, dolor fugit magni placeat porro possimus. Facere, atque. Ea, debitis quam nisi distinctio expedita perferendis iure cupiditate sed eveniet rem numquam similique illum facilis! Quis.</p>
       
        </Box>
      <Box sx={{m:3 , width:"50vw",display:"flex" , flexDirection:"column" ,"@media (max-width:600px)":{ width:"80vw"}}}>
        <TableContainer component={Paper} sx={{justifyContent:"center",alignItems:"center"}}>
     <Table>
      <TableHead>
        <TableRow>
          <TableCell>
Contact Details
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
     </Table>
        </TableContainer>
      </Box>
      
      </Box>
    </Layout>
  )
}

export default Contact
