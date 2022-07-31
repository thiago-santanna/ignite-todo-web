import { ReactElement } from "react";
import styles from "./ContadorTodo.module.css";

interface IContadorTodoProps {
  quantityTodos: number;
  quantityTodosFinalized: number;
}

export function ContadorTodos({
  quantityTodos,
  quantityTodosFinalized,
}: IContadorTodoProps): ReactElement {
  return (
    <>
      <div className={styles.headTodo}>
        <div className={styles.todoCriada}>
          <span className={styles.textCriada}>Tarefas criadas</span>
          <div className={styles.wrapperCount}>
            <span className={styles.count}>{quantityTodos}</span>
          </div>
        </div>
        <div className={styles.todoConcluida}>
          <span className={styles.textConcluida}>Concluídas</span>
          <div className={styles.wrapperCount}>
            <span className={styles.count}>
              {quantityTodosFinalized} de {quantityTodos}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
