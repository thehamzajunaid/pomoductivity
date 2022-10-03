import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function StarterButtons({}) {
  return (
    <>
      <div className="starter-buttons">
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Button variant="contained" size="large">
              25 min
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" size="large">
              5 min
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default StarterButtons;
