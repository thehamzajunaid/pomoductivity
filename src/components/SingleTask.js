import React from "react";
import Container from "@mui/material/Container";
import { taskDelete } from "../features/taskSlice";
import { useDispatch } from "react-redux";

const taskListStyle = {
  width: 500,
  padding: "10px 10px",
  backgroundColor: "#5ca2f7",
  marginTop: "5px",
  textAlign: "left",
  borderRadius: "8px",
};

function SingleTask({ task, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <Container sx={taskListStyle}>
        <div key={task.id}>
          <li style={{ fontSize: "150%" }}>{task.text}</li>
          <div style={{ textAlign: "right" }}>
            <button
              onClick={() => {
                dispatch(taskDelete({ id: id }));
                console.log(id);
              }}
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "2px",
              }}
            >
              X
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleTask;
