import { useState } from "react";
import { AddTodo } from "../../components/AddTodo";
import { EmptyTodo } from "../../components/EmptyTodo";
import { Todo } from "../../components/Todo";
import { ISimpleTodo, ITodo } from "../../types/Todo";

export function Dashboard() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  return (
    <>
      <AddTodo />
      {todos.length > 0 ? <Todo /> : <EmptyTodo />}
    </>
  );
}
