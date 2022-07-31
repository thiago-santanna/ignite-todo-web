import { useState } from "react";
import { AddTodo } from "../../components/AddTodo";
import { EmptyTodo } from "../../components/EmptyTodo";
import { Todo } from "../../components/Todo";
import { ITodo } from "../../types/Todo";

export function Dashboard() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [description, setDescription] = useState<string>("");

  function handleAddTodo(todoDescription: string) {}
  function handleCompletedTodo(id: string) {}
  function handleDeleteTodo(id: string) {}

  return (
    <>
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.length > 0 ? <Todo /> : <EmptyTodo />}
    </>
  );
}
