import styles from "./Todo.module.css";
import imgEmpty from "../../assets/empty.svg";

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
        {/* Aqui abaixo sera um novo compoente */}
        <div className={styles.wrapperTodoList}>
          <div>
            <img src={imgEmpty} alt="Imagem que representa um algo vazio." />
          </div>
          <div className={styles.todoListEmpty}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </div>
      </div>
    </>
  );
}
