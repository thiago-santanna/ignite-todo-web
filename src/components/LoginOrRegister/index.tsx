import styles from "./LoginOrRegister.module.css";

export function LoginOrRegister() {
  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.wrapperForm}>
          <span>form</span>
          <div className={styles.wrapperInput}>
            <input type="text" name="email" id="email" />
          </div>
        </form>
      </div>
    </>
  );
}
