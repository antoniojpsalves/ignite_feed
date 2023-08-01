import { FormEvent } from 'react';
import { Comment } from '../Comment';
import { Avatar } from '../avatar';
import styles from './style.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';

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


export function Post({ author, content, publishedAt }: Props) {

  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt)


  const [comments, setComments] = useState([
    'post muito legal'
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


  function handleCreateNewComment(event: FormEvent) {

    event.preventDefault()

    // console.log(event.target.commentArea.value);

    const newComment = event.target.commentArea.value;
    setComments([...comments, newComment])
  }


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
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content + line.type}> {line.content} </p>
            }
            return <p><a href={line.content} key={line.content + line.type} target='_blank'>{line.content}</a></p>
          })
        }
      </div>

      <form onSubmit={event => handleCreateNewComment(event)} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="commentArea"
          placeholder='Deixe um comentário...'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comentario => (<Comment key={comentario} content={comentario} />))
        }
      </div>
    </article>
  );
}