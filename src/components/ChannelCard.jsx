import React from 'react'
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link} from "react-router-dom"


const ChannelCard = ({ channelDetail,marginTop,channelPage }) =>{ 


  
  

const picture=channelDetail?.snippet?.thumbnails?.high?.url
return (
  
  <Box sx={{
    boxShadow: "none",
    borderRadius: "20px",
    display:"flex",
    justifyContent: channelPage ? "center": "",
    alignItems:"center",
    width:channelPage ? {xs:"356px",md:"320px"}: "auto",
    height:channelPage ? "326px": "40px",
    margin:"auto",
    marginTop:marginTop
  }}>
    <Link to={`/channel/${channelDetail?.id}`}>
    <CardContent sx={{
      display: "flex",
      flexDirection:  channelPage ? "column" : "row",/////
      justifyContent: channelPage ? "center" : "space-between",
      gap:channelPage ? "0px": "10px" ,
    /*   textAlign: "center", */
      color: "#fff"
    }}>
      <CardMedia
        image={picture}
        alt={channelDetail?.snippet?.title}
        sx={{ 
          borderRadius: "50%",
          height: channelPage ?  "180px" : "45px" ,
          width:  channelPage ?  "180px" : "45px" ,
          mb:2,border:"1px solid #e3e3e3"
        }}
      />
      
     <Box>
       <Typography varian="h6">
        {channelDetail?.snippet?.title}
      </Typography>
      {channelDetail?.statistics?.subscriberCount && (
        <Typography>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} 
          Subscribers
        </Typography>
      )}
     </Box>
     

    </CardContent>
    </Link>
  </Box>
)

          }
export default ChannelCard