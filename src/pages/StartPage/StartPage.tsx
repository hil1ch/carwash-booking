import styles from "./StartPage.module.css";

export function StartPage() {
  return (
      <div className={styles.startPage}>
        <h1 className={styles.title}>
          Единая система-приложение бронирования автомоек
        </h1>
        <p className={styles.slogan}>Быстрая запись — безупречный блеск!</p>
        <div className={styles.navigationButtons}>
          <button className={styles.navigationButton}>Для клиентов</button>
          <button className={styles.navigationButton}>Для владельцев</button>
        </div>
      </div>
  );
}
