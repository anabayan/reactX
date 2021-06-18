import React from "react";
import { loadTodos, useAppDispatch, useAppSelector } from "@cncy/core";

export const TodoList = () => {
  const dispatch = useAppDispatch();

  dispatch(loadTodos());
  const todos = useAppSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <p>{todo.text}</p>
      ))}
    </ul>
  );
};

export default TodoList;
