import React from "react";
import "./header.css";

// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  // const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className="container">
        <Typography variant="h5" className="title">
          TouristHub
        </Typography>
        <Box display="flex" className="container">
          <Typography variant="h5" className="title">
            Explore New Places
          </Typography>

          <Box display="flex" className="search-container">
            <input placeholder="search..." className="search-box" />
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
