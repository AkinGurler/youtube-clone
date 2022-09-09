import React, { useState } from 'react';
import {Paper,IconButton} from "@mui/material"
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';

const SearchBar = () => {
  return (
    <Paper component="form"
    onSubmit={()=>{}}
    sx={{
        borderRadius:20,
        border:"1px solid #e3e3e3",
        pl:2,      //padding left//
        boxShadow:"none",
        mr:{sm:5} , // margin right on small devices//
        
    }}>
       <input 
        className='search-bar'
        placeholder="Watch.."
        value=""
        onChange={()=>{}}
       />
       <IconButton type="submit" sx={{
        p:"10px",
        color:"red"
       }}>
        <YoutubeSearchedForIcon/>
       </IconButton>
    </Paper>
  )
}

export default SearchBar