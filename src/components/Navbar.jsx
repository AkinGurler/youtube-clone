import { Stack, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom"
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";



const Navbar = () => {

  return (
    <Stack direction="row" alignItems="center" p={2}
      sx={{
        position: "sticky", //standing on screen//
        flexDirection:{xs:"column",md:"row"},
        background: "#000",
        top: 0,
        justifyContent: "space-between"
      }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} ></img>
        <Typography sx={{ color: "white", fontWeight: 800, fontSize: 25 }}>
          Ourtube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}


export default Navbar