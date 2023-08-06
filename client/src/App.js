import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
} from "@mui/material";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import SearchModule from "./components/SearchModule";

const App = () => {
  
  return (
    <Router>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 2 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/search" element={<SearchModule />} />
              </Routes>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Router>
  );
};

export default App;
