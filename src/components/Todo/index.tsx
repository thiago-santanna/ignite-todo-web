import styles from "./Todo.module.css";
import { ITodo } from "../../types/Todo";
import { ReactElement } from "react";
import { Trash2 } from "react-feather";

interface ITodoProps {
  todos: ITodo[];
  handleCheckTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export function Todo({
  todos,
  handleCheckTodo,
  handleDeleteTodo,
}: ITodoProps): ReactElement {
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className={styles.wrapperTodo}>
            <div className={styles.wrapperListTodo}>
              <div className={styles.wrapperInput}>
                <input
                  className={styles.checkboxRound}
                  onChange={() => handleCheckTodo(todo.id)}
                  checked={todo.situacao}
                  type="checkbox"
                  name="feito"
                  id="feito"
                />
              </div>
              <div className={styles.wrapperText}>
                <p>{todo.descricao}</p>
              </div>
              <div
                onClick={() => handleDeleteTodo(todo.id)}
                className={styles.wrapperTrash}
              >
                <Trash2 size={18} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
