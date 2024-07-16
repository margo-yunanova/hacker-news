import { FC } from 'react';
import styles from './subtitle.module.css';

interface ISubtitle {
  score: number;
  by: string;
  descendants: number;
  favorite?: boolean;
}

export const Subtitle: FC<ISubtitle> = ({
  score,
  by,
  descendants,
  favorite,
}) => {
  return (
    <div className={styles['subtitle-block']}>
      <span className={styles.subtitle}>
        {score} points by {by}
      </span>
      <span className={styles.subtitle}>|</span>
      {favorite && (
        <>
          <a className={styles.subtitle}>{favorite}</a>
          <span className={styles.subtitle}>|</span>
        </>
      )}
      {descendants > 0 && (
        <a className={styles.subtitle}>{descendants} comments</a>
      )}
      {descendants === 0 && <a className={styles.subtitle}>discuss</a>}
    </div>
  );
};
