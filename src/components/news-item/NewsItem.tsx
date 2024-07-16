import { FC } from 'react';
import styles from './newsItem.module.css';

export interface INewsItem {
  serialNumber: number;
  id: number;
  by: string;
  title: string;
  score: number;
  url: string;
}

export const NewsItem: FC<INewsItem> = ({
  serialNumber,
  by,
  title,
  score,
  url,
}) => {
  const domainName = url?.split('/').at(2);
  return (
    <li className={styles['list-item']}>
      <span className={styles['serial-number']}>{serialNumber}.</span>
      <div className={styles.main}>
        <a className={styles['title-block']}>
          <h2 className={styles.title}>
            {title} <span className={styles.subtitle}>({domainName})</span>
          </h2>
        </a>
        <span className={styles.subtitle}>
          {score} points by {by}
        </span>
      </div>
    </li>
  );
};
