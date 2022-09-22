import {useState,useEffect} from 'react'
import {Link,useParams} from "react-router-dom"
import ReactPlayer from "react-player"
import {Typography,Box,Stack} from "@mui/material"

import {Video} from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { ClassNames } from '@emotion/react'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState([])
  const {id}=useParams();
  
  console.log(id)
  console.log(VideoDetail)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`)
      .then((data)=>setVideoDetail(data.items[0]))
      
  
    return () => {
      
    }
  }, [id])

  if(!videoDetail?.snippet) return "Loading..."
  const {snippet} =videoDetail

  return (
    <Box minHeight="95vh">
      <Stack>
        <Box flex={1}>
          <Box sx={{
            width:"100%",
            position:"sticky",
            top:"86px"
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}]`}
            height="77vh" width="100%" controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {snippet.title}
            </Typography>
          </Box>
        </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail