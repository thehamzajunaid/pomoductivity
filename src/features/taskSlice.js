import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded(state, action) {
      state.tasks.push(action.payload);
    },
    taskDelete(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
});

export const { taskAdded, taskDelete } = taskSlice.actions;
export default taskSlice.reducer;
