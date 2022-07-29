import styles from "./EmptyTodo.module.css";
import imgEmpty from "../../assets/empty.svg";

export function EmptyTodo() {
  return (
    <>
      <div className={styles.wrapperTodoList}>
        <div>
          <img src={imgEmpty} alt="Imagem que representa um algo vazio." />
        </div>
        <div className={styles.todoListEmpty}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </>
  );
}
