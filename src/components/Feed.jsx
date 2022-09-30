import React, { useEffect } from 'react'
import {Box,Stack,Typography} from "@mui/material"
import Sidebar from './SideBar'
import { VideoSettings } from '@mui/icons-material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useState } from 'react'
import { getVideosByCategory } from '../actions/video'
import {useDispatch,useSelector} from "react-redux"

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New")

  const videos=useSelector((state)=>state.videosBycategory)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getVideosByCategory(selectedCategory))
  }, [selectedCategory])
  
  return (
   <Stack sx={{
    flexDirection:{sx:"column",md:"row"} //medium devices row//
   }}>
    <Box sx={{
      height:{sx:"auto",md:"92vh"},
      borderRight:"1px solid #3d3d3d",
      px:{sx:0,md:2}
    }}>
      <Sidebar selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      <Typography className='copyright' variant='body2'
      sx={{mt:1.5,color:"white"}}>
        Copyright 2022 Akın
      </Typography>
    </Box>
    <Box p={2} sx={{
      overflowY:"auto",
      height:"90vh", flex:2,
      justifyItems:"center"

      }}>
      <Typography variant='h4' mt={1} sx={{color:"white",fontWeight:"bold"}}>
        {selectedCategory} <span style={{color:"#F31503"}}>
          videos  
        </span>
      </Typography>
      <Videos videos={videos}/>

    </Box>
   </Stack>
  )
}

export default Feed