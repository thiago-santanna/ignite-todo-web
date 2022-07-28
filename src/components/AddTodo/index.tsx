import styles from "./AddTodo.module.css";
import plus from "../../assets/plus.svg";

export function AddTodo() {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.input}>
          <form>
            <label>Adicione uma nova tarefa</label>
            <input type="text" />
          </form>
        </section>
        <section className={styles.button}>
          <span>Criar</span>
          <img src={plus} alt="Imagem com símbolo de mais" />
        </section>
      </div>
    </>
  );
}
