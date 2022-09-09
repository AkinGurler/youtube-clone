import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";



const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2}
    sx={{
      position: "sticky", //standing on screen//
      background: "#000",
      top: 0,
       justifyContent: "space-between" 
    }}>
    <Stack direction ="row">
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} ></img>
      </Link>
      <Typography sx={{ color: "white", fontWeight: 800, fontSize: 25 }}>
        Ourtube
      </Typography>
    </Stack>

    <Stack>
    <SearchBar />
    </Stack>
    

  </Stack>
)



export default Navbar