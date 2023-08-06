import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const googleId = queryParams.get("googleId");
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Wikipedia Search Dashboard
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Sign In
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to={`/dashboard?googleId=${googleId}`}
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
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
