import styles from "./AddTodo.module.css";
import plus from "../../assets/plus.svg";
import { ReactElement, useState } from "react";
import { ContadorTodos } from "../ContadorTodo";

interface IAddTodoPros {
  handleAddTodo: (todoDescription: string) => void;
  quantityTodos: number;
  quantityTodosFinalized: number;
}

export function AddTodo({
  handleAddTodo,
  quantityTodos,
  quantityTodosFinalized,
}: IAddTodoPros): ReactElement {
  const [description, setDescription] = useState<string>("");
  return (
    <>
      <div className={styles.wrapperAddTodo}>
        <section className={styles.input}>
          <form className={styles.formAddTodo}>
            <label>Adicione uma nova tarefa</label>
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </form>
        </section>
        <button
          onClick={() => handleAddTodo(description)}
          className={styles.button}
        >
          <span>Criar</span>
          <img src={plus} alt="Imagem com símbolo de mais" />
        </button>
        <ContadorTodos
          quantityTodos={quantityTodos}
          quantityTodosFinalized={quantityTodosFinalized}
        />
      </div>
    </>
  );
}
