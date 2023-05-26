import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { API_URL } from "../components/api/API_URL";
const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = state.todos.concat(action.payload);
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteToDo.pending, (state, action) => {
        state.status = "loading";
        state.todos = [];
      })
      .addCase(deleteToDo.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewtodo",
  async (initialToDo) => {
    const todo = {
      id: uuidv4(),
      text: initialToDo,
    };
    const response = await axios.post(API_URL, todo);
    return response.data;
  }
);
export const deleteToDo = createAsyncThunk("todos/deleteTodo", async (toDo) => {
  const response = await axios.delete(API_URL + toDo);
  return response.data;
});
export default todoSlice.reducer;
