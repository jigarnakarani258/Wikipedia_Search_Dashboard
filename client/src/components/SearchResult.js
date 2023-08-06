import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";

const SearchResult = ({ searchResults }) => {
  return (
    <>
      {searchResults.map((result) => (
        <Grid item key={result.pageId} xs={12}>
          <Card sx={{ width: "100%" }}>
            <CardHeader title={result.title} />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                dangerouslySetInnerHTML={{ __html: result.snippet }}
              ></Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default SearchResult;
