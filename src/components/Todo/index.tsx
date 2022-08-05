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
  // aqui vou guardar os dados(states)

  return (
    <>
      <div className={styles.wrapper}>
        <ListTodo />
        <ListTodo />
        <ListTodo />
        <ListTodo />
        <ListTodo />
      </div>
    </>
  );
}
