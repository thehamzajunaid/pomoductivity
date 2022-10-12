import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import useTimer from "easytimer-react-hook";
import useSound from "use-sound";
import sound from "../sounds/sound.mp3";
import click from "../sounds/select-click.mp3";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useState } from "react";

//Start Button Theme
// change theme color of our starter buttons
const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

// The entire timer box is now light green. Thanks to this.
const paperTheme = createTheme({
  components: {
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // backgroundColor: "#c486eb",
          backgroundColor: "#52f7d6",
        },
      },
    },
  },
});

//The timer counter
const timerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

//The box where the counter is running. The decimals.
const insideBox = {
  height: 150,
  width: 200,
  bgcolor: "#383736",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  marginTop: "10px",
  fontSize: "80px",
};
//////////////////////

//The outer box inside which we have all the buttons and the counter box.
const timerBoxStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  "& > :not(style)": {
    m: 1,
    width: 400,
    height: 300,
    borderRadius: "5px",
  },
};

//Some styles for stop,pause buttons
const controlButtonColor = {
  backgroundColor: "#383736",
  color: "white",
  borderColor: "black",
  "&:hover": {
    backgroundColor: "black",
    borderColor: "black",
  },
};

// All of the start stop buttons pause and the counter will be inside this component
function TimerBox() {
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
  });

  // const [play] = useSound(sound);
  const [playClick] = useSound(click);
  const [play] = useSound(sound);

  //Once the timer achieved the target (0 mins, 0 seconds) then we set this to true. We use this to play finish sound
  const [alarmSound, setAlarmSound] = useState(false);

  if (alarmSound) {
    play();
    setTimeout(() => {
      setAlarmSound(false);
    }, 3000);
  }

  //A method from the easytimer library which listens to event. Here the target achieved is event.
  // When target is getting achieved we set the alarmSound to true so we can play the sound.
  timer.addEventListener("targetAchieved", () => {
    setAlarmSound(true);
  });
  return (
    <>
      <Box sx={timerBoxStyle}>
        {/* <div className="timer-box"> */}
        <ThemeProvider theme={paperTheme}>
          {" "}
          {/* wrapping our custom theme on the Paper */}
          <Paper elevation={8}>
            {/* Starter Buttons START*/}
            <div className="starter-buttons">
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <ThemeProvider theme={theme}>
                    {" "}
                    {/* wrapping our button for custom theme */}
                    <Button
                      onClick={() => {
                        timer.start({
                          startValues: { minutes: 25 },
                        });
                        playClick();
                      }}
                      variant="contained"
                      size="large"
                      sx={{ backgroundColor: "#43a047" }}
                    >
                      25 min
                    </Button>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={4}>
                  <ThemeProvider theme={theme}>
                    {" "}
                    {/* wrapping our button for custom theme */}
                    <Button
                      onClick={() => {
                        timer.start({
                          startValues: { minutes: 5 },
                          target: { minutes: 0, seconds: 0 },
                        });
                        playClick();
                      }}
                      variant="contained"
                      size="large"
                      sx={{ backgroundColor: "#e80707" }}
                    >
                      5 min
                    </Button>
                  </ThemeProvider>
                </Grid>
                <Grid item xs={4}>
                  <ThemeProvider theme={theme}>
                    {" "}
                    {/* wrapping our button for custom theme */}
                    <Button
                      onClick={() => {
                        timer.start({
                          startValues: { minutes: 15 },
                          target: { minutes: 0, seconds: 0 },
                        });
                        playClick();
                      }}
                      variant="contained"
                      size="large"
                      sx={{ backgroundColor: "#42aaf5" }}
                    >
                      15 min
                    </Button>
                  </ThemeProvider>
                </Grid>
              </Grid>
            </div>
            {/* Starter Buttons END*/}

            {/* Timer START */}
            <div className="timer">
              <Box sx={timerStyle}>
                <Box sx={insideBox}>
                  <div id="count">
                    {
                      <span>
                        {timer.getTimeValues().toString(["minutes", "seconds"])}
                      </span>
                    }
                  </div>
                </Box>
              </Box>
            </div>
            {/* Timeer END */}

            {/* Pause buttons START */}
            <Box sx={{ marginTop: "10px" }}>
              <ButtonGroup size="large" aria-label="large button group">
                <Button
                  onClick={() => {
                    timer.stop();
                  }}
                  sx={controlButtonColor}
                >
                  Stop
                </Button>
                <Button
                  onClick={() => {
                    timer.pause();
                  }}
                  sx={controlButtonColor}
                >
                  Pause
                </Button>
                <Button
                  onClick={() => {
                    timer.reset();
                  }}
                  sx={controlButtonColor}
                >
                  Reset
                </Button>
                <Button
                  onClick={() => {
                    timer.start();
                  }}
                  sx={controlButtonColor}
                >
                  Resume
                </Button>
              </ButtonGroup>
            </Box>
            {/* Pause buttons END */}
          </Paper>
        </ThemeProvider>
        {/* </div> */}
      </Box>
    </>
  );
}

export default TimerBox;
