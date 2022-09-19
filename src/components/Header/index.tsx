import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <>
      <div className={styles.wrapperHeader}>
        <img src={logo} alt="Logo marca TODO" />
      </div>
    </>
  );
}
