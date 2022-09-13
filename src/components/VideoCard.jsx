import React from 'react'
import { Link } from "react-router-dom" //for see video detail
import { Typography,Button, Card, CardContent, CardMedia } from "@mui/material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => { //video/id/videoId
    console.log(videoId, snippet)
    const channelId=snippet?.channelId
    return (
        <Card sx={{
            width:{md:"320px",xs:"%100"},
            boxShadow:"none", borderRadius:0
        }}>
            <Link to={videoId ? `video/$videoID` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
                  <CardContent sx={{ 
                    backgroundColor: "#1E1E1E", height: '106px'
                     }}>
                        <Link to={videoId ? `video/$videoId` : demoVideoUrl}>
                            <Typography  variant="subtitle1" fontWeight="bold" color="#FFF"> 
                                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                            </Typography>
                        </Link> 
                        <Link to={channelId ? `channel/$channelId` : demoChannelUrl}>
                            <Button sx={{marginY:1}} variant="outlined" color="error">
                            <Typography variant="subtitle2" fontWeight="bold" color="gray"> 
                                {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                            </Typography>
                            </Button>
                            
                        </Link>
                    </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard