import React from 'react'
import { Link } from "react-router-dom" //for see video detail
import { Typography, Button, Card, CardContent, CardMedia } from "@mui/material"
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { Box } from '@mui/system';
/* import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getChannelDetails } from '../actions/channel';
import ChannelCard from './ChannelCard'; */




const VideoCard = ({ video: { id: { videoId }, snippet } }) => { //video/id/videoId
    console.log("videocard",snippet)

    const channelId = snippet?.channelId
    return (
        <Card sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            boxShadow: "none", borderRadius: 0
        }}>
            <Link to={`/video/${videoId}`}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
                />
            </Link>
            <CardContent sx={{
                backgroundColor: "#1E1E1E", height: '106px'
            }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Box marginTop={1}>
                    <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}

export default VideoCard