import styles from "./AddTodo.module.css";
import plus from "../../assets/plus.svg";
import { ReactElement } from "react";
import { ContadorTodos } from "../ContadorTodo";

interface IAddTodoPros {
  handleAddTodo: (todoDescription: string) => void;
}

export function AddTodo({ handleAddTodo }: IAddTodoPros): ReactElement {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.input}>
          <form className={styles.formAddTodo}>
            <label>Adicione uma nova tarefa</label>
            <input type="text" />
          </form>
        </section>
        <section className={styles.button}>
          <span>Criar</span>
          <img src={plus} alt="Imagem com símbolo de mais" />
        </section>
        <ContadorTodos />
      </div>
    </>
  );
}
