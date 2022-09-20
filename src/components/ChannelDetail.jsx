import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from "@mui/material"

import {Videos,ChannelCard} from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

 

  const {id}=useParams()

  useEffect(() => { 
    const fetchResults=async()=>{
      const data=await fetchFromAPI(`channels?part=snippet&id=${id}`)
      setChannelDetail(data.items[0])
  
      const channelVideos=await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      setVideos(channelVideos.items)
    }
    fetchResults()
  }, [id])
  

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          //cssgradient banner
          background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(110,52,133,1) 100%)",
          zIndex:10,
          height:"300px"
        }}/>
        //we send css info for this situation
        <ChannelCard channelDetail={channelDetail} marginTop="-93px">
        </ChannelCard>
        </Box>
        <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail