import React, { useState } from 'react';
import {Paper,IconButton} from "@mui/material"
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState("")
  const handleSearch=(event)=>setSearch(event.target.value)

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(search) {
      navigate(`/search/${search}`)
      setSearch("")
    }
  }

  return (
    <Paper component="form"
    onSubmit={handleSubmit}
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
        value={search}
        onChange={handleSearch}
        
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