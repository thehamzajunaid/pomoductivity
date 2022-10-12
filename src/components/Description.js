import React from "react";
import Container from "@mui/material/Container";

const descriptionHeadingStyle = {
  marginTop: "30px",
  fontSize: "30px",
  fontWeight: "bold",
};

const textStyle = {
  marginTop: "15px",
  fontSize: "20px",
  textAlign: "justify",
};

function Description({ aboutScroll }) {
  return (
    <>
      <div id="about" ref={aboutScroll}>
        <Container sx={descriptionHeadingStyle}>
          What is the Pomodoro Technique?
        </Container>

        <Container sx={textStyle}>
          The Pomodoro Technique was developed in the late 1980s by then
          university student Francesco Cirillo. Cirillo was struggling to focus
          on his studies and complete assignments. Feeling overwhelmed, he asked
          himself to commit to just 10 minutes of focused study time. Encouraged
          by the challenge, he found a tomato (pomodoro in Italian) shaped
          kitchen timer, and the Pomodoro technique was born.
        </Container>

        <Container sx={descriptionHeadingStyle}>How to use it?</Container>

        <div className="method">
          <Container sx={textStyle}>
            <li>
              Get a to-do list and a timer. Which we have already provided.
            </li>
            <li>
              Set your timer for 25 minutes, and focus on a single task until
              the timer rings.
            </li>
            <li>
              When your session ends, mark off one pomodoro and record what you
              completed.
            </li>
            <li>Then enjoy a five-minute break.</li>
            <li>
              After four pomodoros, take a longer, more restorative 15 minute
              break.
            </li>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Description;
