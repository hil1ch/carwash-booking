import styles from "./StartPage.module.css";
import { Button } from "../../shared/ui/Button";

export function StartPage() {
  return (
      <div className={styles.startPage}>
        <h1 className={styles.title}>
          Единая система-приложение бронирования автомоек
        </h1>
        <p className={styles.slogan}>Быстрая запись — безупречный блеск!</p>
        <div className={styles.navigationButtons}>
          <Button disabled={false}>Для клиентов</Button>
          <Button disabled={false}>Для владельцев</Button>
        </div>
      </div>
  );
}
