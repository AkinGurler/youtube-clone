import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { Videos } from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { getSuggestedVideos, getVideoDetail } from '../actions/video'
import {useDispatch,useSelector} from "react-redux"


const VideoDetail = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const videoDetail=useSelector((state)=>state.videoDetails)
  const videos=useSelector((state)=>state.suggestedVideos)


 
  useEffect(() => {
    dispatch(getVideoDetail(id))
    dispatch(getSuggestedVideos(id))
  
  }, [id])
  

  if (!videoDetail?.snippet) return "Loading..."
  const { snippet: { channelTitle, title, channelId }, statistics: { likeCount, viewCount, commentCount } } = videoDetail

  return (
    <Box minHeight="95vh">
      {/*------------------------- Video And infos Start----------------*/}
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{
            width: "100%",
            position: "sticky",
            top: "86px"
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}]`}
              height="77vh" width="100%" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" border={1} color="white" p={2}>
                  {channelTitle}
                </Typography>
              </Link>
              <Stack color="white" direction="row" alignItems="center" gap={2}>
                <ThumbUpIcon />
                <Typography variant='body1' >
                  {parseInt(likeCount).toLocaleString()}
                </Typography>
                <VisibilityIcon />
                <Typography variant='body1' >
                  {parseInt(viewCount).toLocaleString()}
                </Typography>

              </Stack>

            </Stack>
          </Box>
        </Box>
        {/* ------------------Suggestion Videos Start--------------------- */}
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems={"center"}>
          <Videos videos={videos} direction="column" />
        </Box>
        {/* ------------------Suggestion Videos END--------------------- */}
      </Stack>
      {/*------------------------- Video And infos END----------------*/}

    </Box>
  )
}

export default VideoDetail