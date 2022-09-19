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

  return (
    <>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className={styles.wrapper}>
            <ListTodo
              todo={todo.descricao}
              initialState={todo.situacao}
              handleDeleteTodo={handleDeleteTodo}
              handleCheckTodo={handleCheckTodo}
            />
          </div>
        ))}
    </>
  );
}
