interface Props {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: { type: string; content: string; }[];
  publishedAt: Date;
}


interface ContentProps {
  type: string;
  content: string[];
}

import { Comment } from '../Comment';
import { Avatar } from '../avatar';
import styles from './style.module.css';

export function Post({ author, content, publishedAt }: Props) {


  const { avatarUrl, name, role } = author

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar search={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
        <time title="15 de Dezembro às 18:14" dateTime="2022-11-15" >Publicado há 1 hora</time>
      </header>

      <div className={styles.content}>
        {

        }
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário...'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}