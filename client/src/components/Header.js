import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/Header.css"; 

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const googleId = queryParams.get("googleId");

  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="title">
          Wikipedia Search Dashboard
        </Typography>
        <Button
          color="inherit"
          className={`nav-button ${location.pathname === "/" ? "active" : ""}`}
          component={RouterLink}
          to="/"
        >
          Sign In
        </Button>
        <Button
          color="inherit"
          className={`nav-button ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
          component={RouterLink}
          to={`/dashboard?googleId=${googleId}`}
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          className={`nav-button ${
            location.pathname === "/search" ? "active" : ""
          }`}
          component={RouterLink}
          to={`/search?googleId=${googleId}`}
        >
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const RouterLink = ({ to, ...rest }) => <Link to={to} {...rest} />;

export default Header;
