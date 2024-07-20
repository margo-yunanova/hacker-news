import { FC, forwardRef } from 'react';
import styles from './newsItem.module.css';
import { Subtitle } from '../subtitle/Subtitle';

export interface INewsItem {
  serialNumber: number;
  id: number;
  by: string;
  title: string;
  score: number;
  url: string;
  favorite: boolean;
  descendants: number;
}

export const NewsItem: FC<INewsItem> = forwardRef(
  ({ serialNumber, by, title, score, url, favorite, descendants, id }, ref) => {
    const hostname = url?.split('/').at(2);

    return (
      <li className={styles['list-item']} ref={ref}>
        <span className={styles['serial-number']}>{serialNumber}.</span>
        <div className={styles.main}>
          <a href={url} target="_blank" className={styles['title-block']}>
            <h2 className={styles.title}>
              {title} <span className={styles.subtitle}>{hostname}</span>
            </h2>
          </a>
          <Subtitle
            id={id.toString()}
            score={score}
            by={by}
            favorite={favorite}
            descendants={descendants}
          />
        </div>
      </li>
    );
  },
);
