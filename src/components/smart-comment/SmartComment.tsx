import { FC, useEffect, useState } from 'react';
import styles from './smart-comment.module.css';
import { getComment } from '../../utils/api';
import { TComment } from '../../utils/types';
import { Comment } from '../comment/Сomment';

interface ISmartComment {
  id: number;
}

export const SmartComment: FC<ISmartComment> = ({ id }) => {
  const [comment, setComment] = useState<TComment | null>(null);

  useEffect(() => {
    getComment(id).then((comment) => setComment(comment));
  }, [id]);

  return (
    <div className={styles.comments}>
      {comment && (
        <Comment by={comment.by} id={comment.id} text={comment.text} />
      )}
      <div className={styles.comment}>
        {comment &&
          comment.kids?.map((id) => <SmartComment key={id} id={id} />)}
      </div>
    </div>
  );
};
