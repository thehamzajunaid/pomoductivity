import React from "react";
import useTimer from "easytimer-react-hook";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const timerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  //   "& > :not(style)": {
  //     bgcolor: "#F1EDEC",
  //     m: 1,
  //     width: 128,
  //     height: 128,
  //   },
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

function Timer({ isTargetAchieved, timer }) {
  return (
    <>
      <div className="timer">
        <Box sx={timerStyle}>
          <Box sx={insideBox}>
            {isTargetAchieved ? (
              <span>Done</span>
            ) : (
              <span>
                {timer.getTimeValues().toString(["minutes", "seconds"])}
              </span>
            )}
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Timer;
