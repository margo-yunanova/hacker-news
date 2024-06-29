import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hacker News</h1>
      <div>
        Сортировать: <button className={styles.button}>Новые | </button>
        <button className={styles.button}> Лучшие | </button>
        <button className={styles.button}> Топ</button>
      </div>
    </header>
  );
};
