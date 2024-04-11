import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <p>Error 404: NOT FOUND</p>
    </div>
  );
};

export default ErrorMessage;
