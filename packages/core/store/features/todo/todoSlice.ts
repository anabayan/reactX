import { Todo } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk, RootState } from "../../store";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    receiveTodos(state, action: PayloadAction<Todo[]>) {
      return action.payload;
    },
    receiveTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      let todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { toggleTodo } = todoSlice.actions;

export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
  const id = Math.random().toString(36).substr(2, 9);
  ///TODO - window apis
  // window.history.pushState(null, document.title, `${id}`);
};

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  // const todos = await fetchTodos();
  const todos = [
    {
      id: "1",
      text: "Test",
      completed: false,
    },
  ];
  dispatch(todoSlice.actions.receiveTodos(todos));
};

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317
      completed: false,
      text: text,
    };

    //await call API to save

    dispatch(todoSlice.actions.receiveTodo(newTodo));
  };

export default todoSlice.reducer;
