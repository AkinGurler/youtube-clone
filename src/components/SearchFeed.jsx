import React, { useEffect } from 'react'
import {Box,Stack,Typography} from "@mui/material"
import Sidebar from './SideBar'
import { VideoSettings } from '@mui/icons-material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchVideos } from '../actions/video'

const Feed = () => {
 
 
  const {searchTerm}=useParams()

 
  const dispatch=useDispatch()
  const videos=useSelector((state)=>state.searchVideos)
  
  useEffect(() => {
    dispatch(getSearchVideos(searchTerm))
  }, [searchTerm])
  


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    /*we call this func and it returns a promise succesfull return .then()*/
    /* we cant say const data because it returns promise */
      .then((data)=>setVideos(data.items))
  }, [])
  
  return (
   
    <Box p={2} sx={{
      overflowY:"auto",
      height:"90vh", flex:2
      }}>
      <Typography variant='h4' mt={1} sx={{color:"white",fontWeight:"bold"}}>
      {searchTerm} <span style={{color:"#F31503"}}>
          videos  
        </span>
      </Typography>
      <Videos videos={videos}/>

    </Box>
  )
}

export default Feed