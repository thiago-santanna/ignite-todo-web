import { useState } from "react";
import { AddTodo } from "../../components/AddTodo";
import { EmptyTodo } from "../../components/EmptyTodo";
import { Todo } from "../../components/Todo";
import { ITodo } from "../../types/Todo";

export function Dashboard() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [description, setDescription] = useState<string>("");

  function handleAddTodo(todoDescription: string) {}

  return (
    <>
      <AddTodo
        quantityTodos={5}
        quantityTodosFinalized={2}
        handleAddTodo={handleAddTodo}
      />
      {todos.length == 0 ? <Todo todos={todos} /> : <EmptyTodo />}
    </>
  );
}
