import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export const CommentCard = ({ comment }) => {
    const { snippet: { topLevelComment: { snippet: { authorDisplayName, authorProfileImageUrl, textDisplay, textOriginal, likeCount } } } } = comment
    const defaultImage="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"

    return (
      <Card sx={{display:"flex",backgroundColor: "#1E1E1E",marginTop:"10px"}}>
            <CardMedia
                component="img"
                image={  authorProfileImageUrl || defaultImage  }
                alt="user"
                sx={{ width: "50px", height: "50px",borderRadius:"50%" ,padding:"10px",marginTop:"5px",}}
            />

            <CardContent >
                <Stack>
                <Typography variant="h5" color={"#f2f2f2"} weight={"bold"} > {authorDisplayName}</Typography>
                <Typography  color={"#d3d3d3"}> {textOriginal}   </Typography>
                </Stack>
                 
                 <Stack direction={"row"}  gap={2}>
                 <ThumbUpIcon sx={{color:"#d3d3d3"}} />
                 <Typography color={"#d3d3d3"} > {likeCount} </Typography>
                 <ThumbDownIcon sx={{color:"#d3d3d3"}}/> 
                 </Stack>
                
         

            </CardContent>

        </Card>
    )
}
