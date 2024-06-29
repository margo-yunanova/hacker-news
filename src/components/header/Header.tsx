import { FC } from 'react';
import styles from './header.module.css';

export type sortingType = 'new' | 'best' | 'top';

interface IHeader {
  handleSortButton: (type: sortingType) => void;
  activeButton: 'new' | 'best' | 'top';
}

export const Header: FC<IHeader> = ({ handleSortButton, activeButton }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Hacker News</h1>
      <div className={styles['button-group']}>
        Сортировать:
        <button
          onClick={() => {
            handleSortButton('new');
          }}
          className={`${styles.button} ${activeButton === 'new' ? styles['active-button'] : ''}`}
        >
          Новые
        </button>
        <button
          onClick={() => {
            handleSortButton('best');
          }}
          className={`${styles.button} ${activeButton === 'best' ? styles['active-button'] : ''}`}
        >
          Лучшие
        </button>
        <button
          onClick={() => {
            handleSortButton('top');
          }}
          className={`${styles.button} ${activeButton === 'top' ? styles['active-button'] : ''}`}
        >
          Топ
        </button>
      </div>
    </header>
  );
};
