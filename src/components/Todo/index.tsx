import { ContadorTodos } from "../ContadorTodo";
import { EmptyTodo } from "../EmptyTodo";
import { ListTodo } from "../ListTodo";
import styles from "./Todo.module.css";
import { ITodo } from "../../types/Todo";
import { ReactElement } from "react";

interface ITodoProps {
  todos: ITodo[];
}

export function Todo({ todos }: ITodoProps): ReactElement {
  function handleCheckTodo(id: string) {}
  function handleDeleteTodo(id: string) {}
  const todo = "teste";

  return (
    <>
      <div className={styles.wrapper}>
        <ListTodo
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
        <ListTodo
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
        <ListTodo
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
        <ListTodo
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
        <ListTodo
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      </div>
    </>
  );
}
