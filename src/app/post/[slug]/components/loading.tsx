import styles from "./loading.module.scss";

export const LoadingPost = () => {
  return (
    <div className={styles.loading}>
      <h1>Carregando página...</h1>
    </div>
  );
};
