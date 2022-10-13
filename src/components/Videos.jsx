import React from 'react'
import {Stack,Box} from "@mui/material"
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos,direction}) => {
 if(!videos.length) return "Loading..."
  return (
  <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item,index)=>(
      <Box key={index}>
        {item.id.videoId && <VideoCard video={item}/>} {/*  if it is video */ }
        {item.id.channelId && <ChannelCard channelDetail={item} channelPage /> }
      </Box>
    ))}

  </Stack>
  )
}

export default Videos