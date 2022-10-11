import { Box,Stack } from "@mui/material"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComments } from '../actions/comments'
import { CommentCard } from "./CommentCard"


const Comments = ({comments}) => {

    if(!comments.length) return "Loading..."
  return (
    <Stack direction={"column"}  gap={2}>
      {comments.map((comment,index)=>(
        <Box key={index}>
          <CommentCard comment={comment} />
        </Box>
      ))}
    </Stack>
    
  )
}

export default Comments