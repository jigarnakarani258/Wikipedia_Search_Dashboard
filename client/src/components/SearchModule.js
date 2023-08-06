import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Grid } from "@material-ui/core";
import SearchResult from "./SearchResult";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const SearchModule = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const googleId = queryParams.get("googleId");

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_DOMAIN}api/search?q=${searchQuery}&googleId=${googleId}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching Wikipedia:", error);
    }
  };

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Wikipedia Search</h2>
        </Grid>

        <Grid container item xs={12} alignItems="center" spacing={2}>
          <Grid item xs={9}>
            <TextField
              label="Enter search query"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h3>Search Results</h3>
        </Grid>
        <Grid item xs={12} container spacing={4}>
          <SearchResult searchResults={searchResults} />
        </Grid>
      </Grid>
    </>
  );
};

export default SearchModule;
