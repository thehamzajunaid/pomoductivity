import React from "react";
import Grid from "@mui/material/Grid";
import TimerBox from "./TimerBox";

//The component which is separating our main page in 3 coloumns. The center column is wider
// The TimerBox will reside in the center column.
function Container() {
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <TimerBox />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </>
  );
}

export default Container;
