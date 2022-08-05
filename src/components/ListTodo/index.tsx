import styles from "./ListTodo.module.css";
import { Trash2 } from "react-feather";

interface IPropsListTodo {
  todo: string;
  handleCheckTodo: (id: string) => {};
  handleDeleteTodo: (id: string) => {};
}

export function ListTodo({
  todo,
  handleCheckTodo,
  handleDeleteTodo,
}: IPropsListTodo) {
  return (
    <>
      <div className={styles.wrapperListTodo}>
        <div className={styles.wrapperInput}>
          <input
            onClick={() => handleCheckTodo}
            className={styles.checkboxRound}
            type="checkbox"
            name="feito"
            id="feito"
          />
        </div>
        <div className={styles.wrapperText}>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed famesinteger.
          </p>
        </div>
        <div onClick={() => handleDeleteTodo} className={styles.wrapperTrash}>
          <Trash2 size={18} />
        </div>
      </div>
    </>
  );
}
