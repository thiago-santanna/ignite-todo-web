import { EmptyTodo } from "../EmptyTodo";
import styles from "./Todo.module.css";

export function Todo() {
  return (
    <>
      <div className={styles.wrapper}>
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
        {/* Aqui depende da lista de Todos, um componente ou outro */}
        <EmptyTodo />
      </div>
    </>
  );
}