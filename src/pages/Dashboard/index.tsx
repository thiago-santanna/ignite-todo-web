import { useEffect, useState } from "react";
import { AddTodo } from "../../components/AddTodo";
import { EmptyTodo } from "../../components/EmptyTodo";
import { Todo } from "../../components/Todo";
import { ITodo } from "../../types/Todo";
import { Header } from "../../components/Header";

export function Dashboard() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todosFinalizados, setTodosFinalizados] = useState(0);

  useEffect(() => {
    let finalizados = 0;
    todos.forEach((todo) => (todo.situacao === true ? (finalizados += 1) : 0));
    setTodosFinalizados(finalizados);
  }, [todos]);

  function handleAddTodo(todoDescription: string) {
    const newTodo: ITodo = {
      id: getRandomInt(1, 1000),
      descricao: todoDescription,
      situacao: false,
      data: new Date().toLocaleDateString(),
    };
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  function getRandomInt(min: number, max: number): string {
    min = Math.ceil(min);
    max = Math.floor(max);
    const resultado = Math.floor(Math.random() * (max - min) + min);
    return resultado.toString();
  }

  function handleCheckTodo(id: string) {
    const filteredTodo = todos.filter((todo) => {
      if (todo.id === id) {
        todo.situacao = !todo.situacao;
      }
      return todo;
    });
    setTodos(filteredTodo);
  }
  function handleDeleteTodo(id: string) {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  }
  return (
    <div>
      <Header />
      <AddTodo
        quantityTodos={todos.length}
        quantityTodosFinalized={todosFinalizados}
        handleAddTodo={handleAddTodo}
      />
      {todos.length !== 0 ? (
        <Todo
          todos={todos}
          handleCheckTodo={handleCheckTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ) : (
        <EmptyTodo />
      )}
    </div>
  );
}
