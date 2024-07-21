import { FC } from 'react';
import styles from './comment.module.css';

interface IComment {
  by: string;
  id: number;
  text: string;
}

export const Comment: FC<IComment> = ({ by, text }) => {
  return (
    <div className={styles.comment}>
      <div className={styles['subtitle-block']}>
        <span className={styles.subtitle}>{by}</span>
        <span className={styles.subtitle}>|</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <a>
        <span>reply</span>
      </a>
    </div>
  );
};
