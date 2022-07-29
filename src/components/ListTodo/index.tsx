import styles from "./ListTodo.module.css";
import { Trash2 } from "react-feather";

export function ListTodo(props: any) {
  return (
    <>
      <div className={styles.wrapperListTodo}>
        <div className={styles.wrapperInput}>
          <input
            className={styles.checkboxRound}
            type="checkbox"
            name="feito"
            id="feit"
          />
        </div>
        <div className={styles.wrapperText}>
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed famesinteger.
          </p>
        </div>
        <div className={styles.wrapperTrash}>
          <Trash2 size={18} />
          {/* <img src={imgTrash} alt="imagem de uma lixeira" /> */}
        </div>
      </div>
    </>
  );
}
