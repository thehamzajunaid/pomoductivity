import React from "react";
import Container from "@mui/material/Container";

const descriptionHeadingStyle = {
  marginTop: "30px",
  fontSize: "30px",
  fontWeight: "bold",
  fontFamily: "Fuzzy Bubbles",
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
          himself to commit to just 25 minutes of focused study time. Encouraged
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

            <div className="paragraph">
              The 25-minute work sprints are the core of the method, but a
              Pomodoro practice also includes three rules for getting the most
              out of each interval:
            </div>

            <div className="paragraph">
              <b>Break down complex projects.</b> If a task requires more than
              four pomodoros, it needs to be divided into smaller, actionable
              steps. Sticking to this rule will help ensure you make clear
              progress on your projects.
            </div>

            <div className="paragraph">
              <b>Small tasks go together.</b> Any tasks that will take less than
              one Pomodoro should be combined with other simple tasks. For
              example, "write rent check," "set vet appointment," and "read
              Pomodoro article" could go together in one session.
            </div>

            <div className="paragraph">
              <b>Once a pomodoro is set, it must ring.</b> The pomodoro is an
              indivisible unit of time and can not be broken, especially not to
              check incoming emails, team chats, or text messages. Any ideas,
              tasks, or requests that come up should be taken note of to come
              back to later.
            </div>
          </Container>
        </div>
        <Container sx={descriptionHeadingStyle}>Happy Productivity</Container>
        <div>
          <a href="https://github.com/thehamzajunaid" target="_blank">
            <b>Creator</b>
          </a>{" "}
          Note:
        </div>
        <div className="footer-note">
          Hey there, I hope this app will help you in staying productive and
          manage your day to day tasks more effectively.
        </div>
      </div>
    </>
  );
}

export default Description;
