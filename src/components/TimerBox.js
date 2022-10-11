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
          backgroundColor: "#eb675e",
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
    // startValues: { minutes: 25 },
  });

  // const [play] = useSound(sound);
  const [playClick] = useSound(click);
  const [play] = useSound(sound);

  const [alarmSound, setAlarmSound] = useState(false);

  if (alarmSound) {
    play();
    setTimeout(() => {
      setAlarmSound(false);
    }, 3000);
  }
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
                <Grid item xs={6}>
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
                <Grid item xs={6}>
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
