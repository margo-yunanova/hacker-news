import { FC } from 'react';
import styles from './subtitle.module.css';
import { useNavigate } from 'react-router-dom';

interface ISubtitle {
  id: string;
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
  id,
}) => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams();
  searchParams.set('id', id);

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
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate(`item?${searchParams.toString()}`);
          }}
          className={styles.subtitle}
        >
          {descendants} comments
        </a>
      )}
      {descendants === 0 && <a className={styles.subtitle}>discuss</a>}
    </div>
  );
};
