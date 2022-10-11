import React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { taskAdded, taskDelete } from "../features/taskSlice";
import SingleTask from "./SingleTask";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
  },
});

const containerStyle = {
  width: 500,
  height: 40,
  bgcolor: "#ed6f66",
  marginTop: "20px",
  padding: "5px",
  borderRadius: "8px",
  fontSize: "20px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const addTaskContainerStyle = {
  width: 500,
  textAlign: "right",
  paddingRight: "0",
};

const taskListStyle = {
  width: 500,
  padding: "10px 10px",
  backgroundColor: "#9e93d9",
  marginTop: "5px",
  textAlign: "left",
  borderRadius: "8px",
};

function Tasks() {
  // Redux Store things
  //The tasks list from the store.
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  //The input user enter in the TextField
  const [input, setInput] = useState("");

  //When Add Task button is clicked then action will dispatch with the input.
  const onAddTaskClicked = () => {
    if (input) {
      dispatch(
        taskAdded({
          id: nanoid(),
          text: input,
        })
      );

      setInput("");
    }
  };
  return (
    <>
      {/* The Task Heading */}
      <Container sx={containerStyle}>Tasks</Container>

      {/*1: The TextField where we are taking input */}
      <Container disableGutters sx={{ width: 500, marginBottom: "10px" }}>
        <TextField
          fullWidth
          id="standard-basic"
          placeholder="Type here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ marginTop: "5px" }}
        />
      </Container>
      {/*1: END  */}

      {/*2: The Add Task Button */}
      <Container disableGutters sx={addTaskContainerStyle}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#383736",
              borderRadius: "8px",
              textAlign: "right",
            }}
            onClick={onAddTaskClicked}
          >
            Add task
          </Button>
        </ThemeProvider>
      </Container>
      {/* 2: END */}

      {/*3: Tasks List */}
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <SingleTask key={task.id} task={task} id={task.id} />
          ))
        ) : (
          <span>No tasks</span>
        )}
      </div>
      {/* 3: END */}
    </>
  );
}

export default Tasks;
