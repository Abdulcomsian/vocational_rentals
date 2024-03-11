import styles from "./Message.module.css";

export default function Message({ children }) {
  return <p className={styles.message}>👋🏻 {children}</p>;
}
