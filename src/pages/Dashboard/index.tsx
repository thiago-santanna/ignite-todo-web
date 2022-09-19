import { useState } from "react";
import { AddTodo } from "../../components/AddTodo";
import { EmptyTodo } from "../../components/EmptyTodo";
import { Todo } from "../../components/Todo";
import { ITodo } from "../../types/Todo";

export function Dashboard() {
  function getRandomInt(min: number, max: number): string {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return resultado.toString();
  }

  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1020",
      descricao: "Fazer compras",
      situacao: false,
      data: "19/09/2022",
    },
    {
      id: "1021",
      descricao: "Finalizar desafio Ignite",
      situacao: true,
      data: "19/09/2022",
    },
  ]);

  function handleAddTodo(todoDescription: string) {
    const hoje = new Date();

    const newTodo: ITodo = {
      id: getRandomInt(1, 1000),
      descricao: todoDescription,
      situacao: false,
      data: hoje.toLocaleDateString(),
    };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  return (
    <>
      <AddTodo
        quantityTodos={0}
        quantityTodosFinalized={0}
        handleAddTodo={handleAddTodo}
      />
      {todos.length !== 0 ? <Todo todos={todos} /> : <EmptyTodo />}
    </>
  );
}
