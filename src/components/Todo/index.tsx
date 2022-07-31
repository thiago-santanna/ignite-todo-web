import { ContadorTodos } from "../ContadorTodo";
import { EmptyTodo } from "../EmptyTodo";
import { ListTodo } from "../ListTodo";
import styles from "./Todo.module.css";

export function Todo() {
  // aqui vou guardar os dados(states)

  return (
    <>
      <div className={styles.wrapper}>
        {/* Aqui depende da lista de Todos, um componente ou outro */}
        {/* <EmptyTodo /> */}
        {/* ou */}
        <ListTodo />
        <ListTodo />
        <ListTodo />
        <ListTodo />
        <ListTodo />
      </div>
    </>
  );
}
