import React from 'react'
import {Box,Stack,Typography} from "@mui/material"
import Sidebar from './SideBar'
import { VideoSettings } from '@mui/icons-material'
import Videos from './Videos'

const Feed = () => {
  return (
   <Stack sx={{
    flexDirection:{sx:"column",md:"row"} //medium devices row//
   }}>
    <Box sx={{
      height:{sx:"auto",md:"92vh"},
      borderRight:"1px solid #3d3d3d",
      px:{sx:0,md:2}
    }}>
      <Sidebar/>
      <Typography className='copyright' variant='body2'
      sx={{mt:1.5,color:"white"}}>
        Copyright 2022 Akın
      </Typography>
    </Box>
    <Box p={2} sx={{
      overflowY:"auto",
      height:"90vh", flex:2
      }}>
      <Typography variant='h4' mt={1} sx={{color:"white",fontWeight:"bold"}}>
        New <span style={{color:"#F31503"}}>
          videos  
        </span>
      </Typography>
      <Videos/>

    </Box>
   </Stack>
  )
}

export default Feed