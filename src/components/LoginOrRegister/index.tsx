import styles from "./LoginOrRegister.module.css";
import { Navigate } from "react-router-dom";

export function LoginOrRegister() {
  return (
    <>
      <div className={styles.wrapper}>
        <div>Informe seu e-mail e código de acesso.</div>
        <form className={styles.wrapperForm}>
          <input
            className={styles.Input}
            placeholder="Digite seu e-mail"
            type="text"
            name="email"
            id="email"
          />
          <input
            className={styles.Input}
            placeholder="Digite seu código de acesso"
            type="password"
            name="senha"
            id="senha"
          />
        </form>
        <div>Ou inscreva-se solicitando seu código de acesso</div>
        <form className={styles.wrapperFormCreate}>
          <input
            className={styles.Input}
            placeholder="Digite seu e-mail"
            type="text"
            name="email"
            id="email"
          />
        </form>
        <button className={styles.button}>E lá vamos nós</button>
      </div>
    </>
  );
}
