import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import StarterButtons from "./StarterButtons";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState, useEffect } from "react";
import useTimer from "easytimer-react-hook";
import useSound from "use-sound";
import alarm from "../sounds/alarm.mp3";

//The timer counter
const timerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const insideBox = {
  height: 150,
  width: 200,
  bgcolor: "#cfcbc0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  marginTop: "10px",
  fontSize: "50px",
};
//////////////////////

const timerBoxStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  "& > :not(style)": {
    m: 1,
    width: 400,
    height: 300,
  },
};

// All of the start stop buttons pause and the counter will be inside this component
function TimerBox() {
  const [timer, isTargetAchieved] = useTimer({
    startValues: { minutes: 25 },
    countdown: true,
  });

  const [play, exposedData] = useSound(alarm);

  const [sound, setSound] = useState(false);
  const [pause, setPause] = useState(false);

  if (sound && !pause) {
    play();
  } else {
    exposedData.stop();
  }

  return (
    <>
      <Box sx={timerBoxStyle}>
        <Paper elevation={3}>
          <div className="starter-buttons">
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    // exposedData.stop();
                    // setSound(false);
                    setPause(false);
                    timer.start({ startValues: { seconds: 5 } });

                    setTimeout(() => {
                      // play();
                      setSound(true);
                    }, 5000);
                  }}
                  variant="contained"
                  size="large"
                >
                  25 min
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => {
                    // setSound(false);
                    // exposedData.stop();
                    setPause(false);
                    timer.start({ startValues: { seconds: 5 } });
                    setTimeout(() => {
                      setSound(true);
                    }, 5000);
                  }}
                  variant="contained"
                  size="large"
                >
                  5 min
                </Button>
              </Grid>
            </Grid>
          </div>
          <div className="timer">
            <Box sx={timerStyle}>
              <Box sx={insideBox}>
                <div id="count">
                  {timer.getTimeValues().toString(["minutes", "seconds"])}
                </div>
              </Box>
            </Box>
          </div>
          <Box sx={{ marginTop: "10px" }}>
            <ButtonGroup size="large" aria-label="large button group">
              <Button
                onClick={() => {
                  timer.stop();
                  setPause(true);
                }}
              >
                Stop
              </Button>
              <Button
                onClick={() => {
                  timer.pause();
                  setPause(true);
                }}
              >
                Pause
              </Button>
              <Button
                onClick={() => {
                  timer.reset();
                  setPause(true);
                }}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default TimerBox;
