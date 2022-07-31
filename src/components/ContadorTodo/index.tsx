import { ReactElement } from "react";
import styles from "./ContadorTodo.module.css";

export function ContadorTodos(): ReactElement {
  return (
    <>
      <div className={styles.headTodo}>
        <div className={styles.todoCriada}>
          <span className={styles.textCriada}>Tarefas criadas</span>
          <div className={styles.wrapperCount}>
            <span className={styles.count}>0</span>
          </div>
        </div>
        <div className={styles.todoConcluida}>
          <span className={styles.textConcluida}>Concluídas</span>
          <div className={styles.wrapperCount}>
            <span className={styles.count}>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
