import { Box } from "@mui/material"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllComments } from '../actions/comments'

const Comments = ({id}) => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getAllComments(id))
    }, [id])
    


  return (
    <div>
        comments
    </div>
  )
}

export default Comments