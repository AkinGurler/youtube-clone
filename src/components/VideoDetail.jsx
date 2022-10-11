import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { Videos } from "./"

import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { getSuggestedVideos, getVideoDetail } from '../actions/video'
import {useDispatch,useSelector} from "react-redux"
import { getChannelDetails } from '../actions/channel'
import {ChannelCard} from './'
import Comments from './Comments'




const VideoDetail = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const channelDetails=useSelector((state)=>state.channelDetails)
  const video=useSelector((state)=>state.video)

  

  useEffect(() => {
    console.log("useEffect çalıştı")
    Promise.resolve(dispatch(getVideoDetail(id)))
    .then(()=>dispatch(getChannelDetails(channelId)))
  },[id])
  

  if (!video?.videoDetail.snippet) return "Loading..."
  const { snippet: { /* channelTitle */ title, channelId }, statistics: { likeCount, viewCount, /* commentCount */ } } = video.videoDetail

 
 
  
  
 

  return (
    <Box minHeight="100vh">
      {/*------------------------- Video And Suggestion Videos Started----------------*/}
      <Stack direction={{xs:"column",md:"row"}} sx={{overflow: "auto",}}>

        {/* -------------------Video and Deteils Started------------------------ */}
        <Box flex={1}>
          <Box sx={{
            width: "100%",
            position: "sticky",
            /* top: "86px" */
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}]`}
              height="77vh" width="100%" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems="center">
              <Link to={`/channel/${channelId}`} >
                
              {/*   <Typography  border={1} color="gray" p={2}> */}
                  
                <ChannelCard marginTop={"15px"} channelDetail={channelDetails} />
              {/*   </Typography> */}
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
            {/* -------Comment Started -------------*/}
            <Box>

            <Comments  comments={video.comments} />
            </Box>  


          </Box>
        </Box>
        {/* -------------------Video and Deteils Finished------------------------ */}
        {/* ------------------Suggestion Videos Start--------------------- */}
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems={"center"}>
          <Videos videos={video.suggestedVideos} direction="column" />
        </Box>
        {/* ------------------Suggestion Videos END--------------------- */}
      </Stack>
      {/*------------------------- Video And Suggestion Videos END----------------*/}
     
    </Box>
  )
}

export default VideoDetail